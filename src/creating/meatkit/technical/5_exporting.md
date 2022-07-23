# Exporting
During the build process, there's two types of special exports. Asset bundles, and script assembly.
In both of these cases, we are required to do some processing on them before they will actually work
in the game. This article will explain how we reverse some of the side effects of the method we use
to import the game scripts.

## Scripts exporting
The editor will compile any .cs files you have in your Unity project into a dll file already, which is
great because it does half the work for us. This is however not ideal for a few reasons:
* The compiled assembly is called 'Assembly-CSharp.dll', which conflicts with the name of the game's assembly.
* The compiled assembly still references 'H3VRCode-CSharp.dll' for all game code rather than 'Assembly-CSharp.dll'
* Unity compiles _all_ scripts in your project into _one_ dll.
  * The compiled assembly will contain duplicate scripts from Alloy and Bakery, which are included in the game itself.
  * If you use your MeatKit project for multiple mods, it may contain bespoke scripts for one of your other mods that you don't intend to include in this one
* Nothing in this compiled assembly will actually cause any of your exported assets to be loaded

So here's what happens to resolve all of those issues:

First we need to rename our compiled assembly to something else to avoid conflicting with the game's,
the name that is used is the thunderstore package name. We also need to rename the references, this
is the reverse of what we did to import the game's assembly so all of that applies, just backwards.

Next we need to remove any unwanted scripts from the assembly. This is where the strip namespaces
option from the build profile comes in. When this is enabled (which it is by default) any scripts
_not_ in an explicitly allowed namespace will be removed from the assembly, ensuring that only
scripts that you intend to be included get included. Any scripts not in a namespace will be included
by default, as well as in a namespace that matches `Author.ModName`. Everything else must be added
to a list of allowed namespaces. In addition to namespace stripping, we also remove the same types
that we removed from the imported game scripts, to ensure that only one copy of them will ever exist
in both the game, and the editor.

Finally, during this export process, we also generate a BepInEx plugin class inside the exported
assembly that will serve to actually load the exported assets. This generated plugin class comes from
a template that is included with MeatKit, but you can replace it with your own adding custom behavior
by making a copy and moving it into the main namespace of your mod. Each build item is given the
chance to generate a small bit of code in the plugin that will load the assets it created, usually
it will generate a single line of code that calls into the main mod (Atlas, OtherLoader) and give it
the path to the asset bundle. The plugin class is also renamed to match your mod's name, and any
required dependencies for it are added here.

## Asset Bundle Exporting
Remember back to [Article 2: Formats](./2_formats.md) how inside asset bundles, Unity stores a small
internal asset that serves as a reference for scripts used on other objects inside the bundle, and in
[Article 3: Importing](./3_importing.md) where we renamed the imported game assembly to `H3VRCode-CSharp`,
and just now how we renamed our exported assembly to something else too. If we were to just export
a bundle without any modifications none of our scripts would work!

The solution to this is to rename the script assembly names in the asset bundles too. In a previous
version of MeatKit, this was done by waiting until Unity built the asset bundles before re-opening
them ourselves to search over the file for these references and apply our modifications. This however
is very slow, as soon as Unity finished building and compressing the bundles, we were opening them
right back up for modification, requiring just as long, if not longer, to apply our modifications
and then save and recompress the bundle. In the newer versions we drop this method entirely, instead
opting to do the replacement just before Unity writes the data into the bundle in the first place.

Part of the MeatKit v2 update is hooking into the editor itself and strategically messing with
function pointers and memory in order to run our code right before Unity does something important.
In this case, right before Unity writes a MonoScript asset into an asset bundle, we swap out the
assembly name with the intended replacement. Unity writes it to the file, and then we swap it back
right after ensuring that we can continue in the editor as normal. Using this new technique we end
up saving a significant amount of time from our builds, sometimes up to 50%.

Also during this process, we keep track of all the scripts that make their way into a bundle. Because
Unity only writes these MonoScript assets for scripts which get used, we can easily put them all
into a list so later when we export the scripts, we can warn the user if a script they used on an
exported object ended up getting removed from the assembly because it wasn't in the allowed namespaces
list.
