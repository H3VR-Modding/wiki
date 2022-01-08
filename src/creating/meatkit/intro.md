# MeatKit

## What Is MeatKit?
MeatKit is a Unity Editor modding toolkit for developing and packaging custom maps, guns, and mods for H3VR.
Essentially, it's a template Unity project that comes with all kinds of samples and tools to make it easy for you to make your mods.

## Features


### Samples and all the tools you'll need
Getting into modding can be difficult. It's not easy learning how to do something, but MeatKit provides you with all the tools you'll need as well as samples for various types of mods to get you started.

Currently MeatKit has samples for:
* Custom maps
* Custom guns

As well as the following commonly used tools:
* IconCamera, for easily creating icons for custom objects
* PrefabLoader, for loading in a prefab from an existing asset bundle
* EnumPicker, for making large enum dropdowns searchable

### One click to build your Thunderstore package
The time it takes to build and create a package for your mod can be significantly reduced using MeatKit's build pipeline. By defining build items for what you wish to include in your mod, MeatKit will handle creating the asset bundles and generating assets. By reducing the time it takes to build your mod, the overall time to test your changes goes down, resulting in a quicker workflow.

MeatKit's build pipeline outputs your mod as a Thunderstore package and can optionally automatically copy the output to a profile for easy testing.

### Easily import the game's scripts
Before MeatKit, in order to use the game's scripts in your mod you most likely relied on uTinyRipper exports. uTinyRipper does a terrible job at doing that, removing everything except for serialized fields, including methods, editor attributes (`CreateAssetMenu`, `Header`, `HideInInspector`, etc), and even **the default values for the serialized fields**.

MeatKit, however, lets you import the game's DLL directly. It removes nothing from the game's scripts, giving you an editor experience that ends up closely matching Anton's.

### Intuitive custom scripting
Want to add some custom scripts to your map / weapon? No problem. Any scripts you make in your Unity project get automatically included with your mod, and referencing the game's scripts in your own code works as you'd expect. Additionally, if you wish to make use of a custom script library, you may import it's DLL just as you would the game's and get full access to all of it's scripts for game objects, or references in code.

## Ready to start?
Check out the getting started guide to get a project setup and build your first mod.
