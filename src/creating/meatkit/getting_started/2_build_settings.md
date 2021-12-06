# MeatKit build settings
In MeatKit, there is a file which stores your build settings. The majority of these settings and the ones we'll go over now relate to the metadata of your Thunderstore package, like name, description, icon, etc., but there are some more we will get into later.

In this second article of the MeatKit getting started guide, you will configure your build settings to make your mod appear as your own.

## Accessing the build settings
To access the build settings, from the toolbar at the top of Unity select `MeatKit > Build > Configure`. This will select the build settings file and show it in the Unity inspector window. From here it will show you all the settings that go into building a Thunderstore package.

## Rebranding your mod
For now, just change the `Package Name`, `Author`, `Version`, and `Description`. These should all be self-explanatory. If you have an icon for your mod, or a website for it, you can set those now too. The README is just a plain text file that shows up on your Thunderstore page, you can read more about that [over on this page](../../thunderstore/uploading.md).

Just changing the values here is all you need to do to rebrand your mod. If you'd like, you can re-build your mod from `MeatKit > Build > Build` and re-import it to see the changed values.

> [!NOTE]
> Sometimes a message box will appear beneath settings that you edit. They will contain a symbol to indicate the importance of the message (info, warning, error), as well as some text. If there is an error message anywhere in any of your settings, MeatKit will not let you build your package until you correct it. 

## Build Items
Build items are the base of the MeatKit build pipeline. Each build item represents some kind of asset in your project that MeatKit will build and export.
As part of the samples, there should be at least one build item in there already. Click the little triangle by the Build Items tag to show the list of them.
By double-clicking on one, it will select the object and show it in the inspector. Each type of build item has different options and is meant to represents 
some kind of asset, like a custom scene, weapon, or just an asset bundle to store assets.

## Dependencies
This is just a list of the Thunderstore packages your mod will depend on. Some build items require certain dependencies, like the `AtlasSceneBuildItem` requiring Atlas, so if you have a custom scene build item in your list, Atlas will appear automatically in the dependencies and you will not be able to remove it.

You can also add your own here if you are making a more complex mod and need to set one up manually.

## Summary
After rebranding your package, you can [move on to creating your first mod](3_creating.md).
