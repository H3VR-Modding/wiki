# Importing the game

When you first open a MeatKit project, the first thing you must do is import the game.
It's a required step and without it you won't be able to do anything. This article will
explain what this process does, why it is required, and the history of alternative methods.

## The history

One of the main goals of MeatKit is to enable an editing experience as close to the original
Unity project as possible. To achieve this, we need to get all of the game's code into our
project.

In the past, what modders did was to decompile the game's code and place the generated C# code
into their Unity projects. Except as explained earlier, the decompilation process is far from
perfect and to make this work, the tool that was used to accomplish it removed everything except
the bare minimum. After it finished, there was no actual code left in the scripts, only the
serialized fields! While it certainly enabled modding, this is not suitable to attain our goal.

## So what do we do

If decompiling the scripts is off the table, then what do we do? Well, luckily, Unity lets
us import arbitrary .dll files into our project and this should give us access to everything
inside them! This is promising but there are a couple issues, the first being that just placing
the assembly into our project doesn't work.

Unity uses the same assembly name for every project, `Assembly-CSharp`. The game's assembly
is named that, but more importantly, the compiled assembly for our own editor project is named
the exact same thing! So just placing the game assembly into our project will make Unity unhappy
because it very much does not like having two assemblies named the same thing loaded at the same
time. To avoid this, the first thing the import process does is make a copy of the game's assembly
and _renames_ it to `H3VRCode-CSharp` using an assembly editing library called Cecil. Now with
a renamed assembly name, we are one step closer to being able to have Unity load this assembly
in our project. It is important to remember that we did this renaming though, because it will
affect us later.

If you had a completely empty Unity project, you would actually have no issues loading the assembly
with just this renaming step. Unfortunately we aren't working in an empty project, we also have
extra things in there like Alloy and possibly Bakery. Both of these contain their own scripts for
tools and such, and some of them even make it into the game's code! This presents a problem because
we already imported Alloy separately and it comes with those scripts again so now we have duplicates.
As you can probably guess, Unity is not happy with this and we need to remove one of them. Removing
the scripts that come with Alloy is not possible since some of the information that the Alloy assets
require are editor-only and get completely removed in the final build of the game. Attempting to use
the scripts inside the imported game DLL will only cause issues with the Alloy editor tools.

So we need to remove the scripts from the game assembly then. This can also be easily accomplished
using the Cecil library, in the code for the importer there is a big list of what needs to be removed
from the imported game assembly.


## Post processing

Since we already have the assembly open for modification, we might as well do some post processing
on it too. When importing the game with MeatKit, anything inside the game with was marked as private
or protected is changed to public, allowing access to those things from anywhere. This is best used
as a last resort option, when something you need is not normally exposed publicly through the code,
but still a very useful option to have.

Additionally, MeatKit provides a way of defining extra modifications just for your project so you can
for example, add new enum values for custom ammo or magazine types. These are applied on each import.

## Why? Legalities.
Wait, but why can't we just ship the project with this imported assembly right from the start?

While there's nothing _technically_ stopping us, legally we would be in the wrong to do so.
Doing this would require us to redistribute the game's code which we of course do not have
permission to do. So despite it being unlikely to happen, to avoid any legal troubles we
require you to do the import process yourself.

There are a couple hidden upsides to this however. The first being that forcing this upon
everyone means that no matter when you download the MeatKit project, you can be sure that
after your first import you are working with the latest version of the game's code. And
secondly, it means that you must actually have a copy of the game. 

# Importing other assemblies
You may have noticed that alongside the import game option, there is another option to import a
single assembly. That option is used for importing assemblies which do not belong to the game and
do not require some of the processing that the game assembly does like removing some things,
publicizing, or other post processing. The key here is that it's important to remember we renamed
the game's assembly, and because we've done that, we also need to update any other assembly that may
want to use code from the game to point to the new name instead so it can find that code without issue.

If you have an assembly that is neither the game's, nor references the game's, it requires no importing
and can be placed in your project as-is.

Next article: [Build pipeline](./4_build_pipeline.md).
