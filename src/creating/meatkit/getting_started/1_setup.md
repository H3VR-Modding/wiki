# Getting Started with MeatKit
This is the first article in a series which will guide you through the basics of MeatKit.
In this part, you will install Unity, download MeatKit, and confirm everything works by building the sample mod.

## Setup
To use MeatKit, you must have a copy of the game and [Unity Editor 5.6.7f1](https://unity.com/releases/editor/whats-new/5.6.7) installed. Previously H3VR and MeatKit both used 5.6.3p4, but they have since been updadted to be 5.6.7f1 instead. MeatKit will still run on 5.6.3p4.

### Installing Unity
If you do not have Unity 5.6.7f1 installed, you must go and [download it from their archive](https://unity.com/releases/editor/whats-new/5.6.7), select the `Unity Editor Windows (X86-64)` option. Run the installer when it finishes downloading and let everything install with the default options.

You may also install the editor with Unity Hub, if you prefer to do it that way. If you choose to use Unity Hub, know that the first time you try and open a project it may hang on the splash screen. To resolve this you have to open it directly (not through Unity Hub) and register your license from there instead.

> [!NOTE]
> If you already have another version of the Unity Editor installed, you may want to change the install location for 5.6.7f1 to avoid conflicts with other versions.

When the Editor is finished installing, go ahead and open it. It will ask you to log in with your Unity account and then let you register your license. If you do not have a license, just select the 'personal' option and continue. You won't be missing out on any features by doing so. Once you get to the screen for creating a project, you can move on.

### Downloading MeatKit
1. Visit the [MeatKit repository](https://github.com/H3VR-Modding/MeatKit) and download the current version by clicking the green 'Code' button and selecting 'Download ZIP'.
2. Unzip MeatKit and open the folder with your installed version of Unity.
3. With the project open, select `MeatKit > Scripts > Import Game` on the menu bar at the top and point it to your `h3vr/h3vr_Data/Managed` folder.

> [!WARNING]
> If you are getting compile errors for missing the game's assembly and / or cannot see the MeatKit menu bar item, go to `Edit > Project Settings > Player` and in the `Other Settings` tab, clear the `Scripting Define Symbols` field and hit enter, then re-import the game's scripts.

## Import Core Packages
The tools to build different types of mods are created and maintained independently from MeatKit itself, so you will need to download and import one or more of these packages to work on mods:

* Atlas package for mapping: https://github.com/H3VR-Modding/AtlasSampleScenes/releases
* OtherLoader package for creating guns and other items: https://github.com/devyndamonster/MeatKit/releases

Import one or both of the packages depending on what kind of modding you wish to do by using the `Assets > Import Package > Custom Package` menu item. 

## Confirm everything works
To confirm everything is setup correctly, open MeatKit build window (`MeatKit > Build Window`) and click the circle beside the build profile field. At least one of the sample profiles will show up, depending on which packages you imported, select one of them.
You won't need to modify anything to get these to work, however you will want to change the build action to 'copy to profile' and then select one of your r2mm profile folders.

Now click the big build button. When the build is finished, the 'last build time' in the build window will update to reflect the current time, and because of the selected build action, the mod has been inserted into the selected profile and is ready to test.

> [!NOTE]
> The mod will not show up in r2mm's installed list as it doesn't take into account mods installed outside the app, but it is installed and running that profile will cause it to be loaded.

## Updating MeatKit
As of MeatKit v3, an updater window is built into MeatKit. You can check for updates to MeatKit by opening it on the menu bar `MeatKit > Check for updates` and clicking the check for updates button. If an update is available another button will appear to update to the latest version. 

> [!WARNING]
> MeatKit updates itself by removing and re-downloading the entire `Assets/MeatKit` folder in your project. _Do not_ store your own files in there or make any changes to files expecting them to be permanent.

## Summary
Congratulations, you've built your first mod using MeatKit!  
Next: [Changing the build settings](2_build_profile.md)
