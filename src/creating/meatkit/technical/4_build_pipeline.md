# Build pipeline
The MeatKit build pipeline is a general name all of the tools that are used to setup and perform
a build of your mod. The start of which involves the build profile and build items.

## Build profile
A build profile represents a single Thunderstore package and all of the assets inside it to be
exported. The build profile has fields for the Thunderstore metadata, which will not be covered
here as [Thunderstore has its own documentation for that](https://h3vr.thunderstore.io/package/create/docs/).
Alongside the Thunderstore metadata, there are some script related options, and some export options.

The script options are used for one thing; assembly stripping. This will be covered in more detail
in a later article, but the build profile is where you can configure this feature.

The export options is where you configure what build items will be included in this mod, as well
as how MeatKit will build your mod. 

## Build Items
A build item is a representation of a type of mod within your Thunderstore package. Build items
can be a map, a collection of guns, or just an arbitrary collection of assets you wish to use in
your mod via some custom code. Each type of build item will have different fields on it, for
example Atlas Scene Build Items will have a field for the scene file to export, the name of the
scene, the description, author, etc. and an OtherLoader Build Root will have fields for inserting
the individual items for each of the custom objects you want to include.

## Building
When you click build in the build window here's what happens:
1. The build profile, and all build items in it have their validation functions run. If there were
any errors, MeatKit will not allow the build to continue. If there were any warnings, you will get
a message box letting you know there were warnings, with an option to continue if desired.
2. Any files from a previous build are removed.
3. A copy of the compiled scripts assembly is made.
4. The virtual reality supported project setting is forced on to ensure that shaders are compiled correctly.
5. All build items are asked for a list of asset bundles they want to create and then they are all
created at the same time (more on this later).
6. Any unnecessary files from the asset bundle build are deleted.
7. The virtual reality supported setting is reset to what it was before.
8. The script assembly is exported (more on this later).
9. The Thunderstore manifest file is generated from your build profile.
10. The icon for your package is exported. If the icon is not 256x256 it is resized before being written.
11. The readme file is copied to the export folder.
12. If the build action in the selected profile is 'Just build files', the process is done. If the
action is 'Copy to folder', then the built files are copied into a selected thunderstore profile folder.
And if the action is to create a Thunderstore package, then all the files are zipped up, ready to be
uploaded.

Next article: [Exporting](./5_exporting.md).
