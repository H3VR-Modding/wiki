# MeatKit build profiles
In MeatKit, there are files which store your build profiles. Each profile is a different configuration which represents a single Thunderstore package and the assets which are set to be included in it. 

In this second article of the MeatKit getting started guide, you will configure your build settings to make your mod appear as your own.

## Accessing the build profile
If you are starting by using one of the samples, you may just select it and in either the inspector window or the build window edit its values. Alternatively, you can create new empty ones by right clicking in the project window and selecting `Create > MeatKit > Build Profile`.

## Rebranding your mod
For now, just change the `Package Name`, `Author`, `Version`, and `Description`. These should all be self-explanatory. If you have an icon for your mod, or a website for it, you can set those now too. The README is just a plain text file that shows up on your Thunderstore page, you can read more about that [over on this page](../../thunderstore/uploading.md).

Just changing the values here is all you need to do to rebrand your mod. If you'd like, you can re-build your mod from the build window to verify these changes were indeed made.

> [!NOTE]
> Using the copy to profile action, if you change the name or author of your mod the previous mod will not be removed from the profile. This can be done manually by going into that profile's plugins folder and removing the old mod folder.

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
