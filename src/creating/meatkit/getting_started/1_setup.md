# Getting Started with MeatKit
This is the first article in a series which will guide you through the basics of MeatKit.
In this part, you will install Unity, download MeatKit, and confirm everything works by building the sample mod.

## Setup
To use MeatKit, you must have a copy of the game and [Unity Editor 5.6.3p4](https://unity3d.com/unity/qa/patch-releases/5.6.3p4) installed.

### Installing Unity
If you do not have Unity 5.6.3p4 installed, you must go and [download it from their archive](https://unity3d.com/unity/qa/patch-releases/5.6.3p4), select the `Download Assistant` option. Run the installer when it finishes downloading and let everything install with the default options.

> [!NOTE]
> If you already have another version of the Unity Editor installed, you may want to change the install location for 5.6.3p4 to avoid conflicts with other versions.

When the Editor is finished installing, go ahead and open it. It will ask you to log in with your Unity account and then let you register your license. If you do not have a license, just select the 'personal' option and continue. You won't be missing out on any features by doing so. Once you get to the screen for creating a project, you can move on.

> [!WARNING]
> If you have Unity Hub installed, you _cannot_ use it to open this version of the editor for the first time, it will just hang indefinitely on the splash screen. You must open 5.6.3p4 directly and register your license first before Hub will work.

### Downloading MeatKit
1. Download the `Source code (zip)` from the [latest release](https://github.com/H3VR-Modding/MeatKit/releases/latest) of MeatKit, extract it, and open the project in Unity.
2. With the project open, select `MeatKit > Scripts > Import Game` on the menu bar at the top and point it to your `h3vr/h3vr_Data/Managed` folder.
3. After the game's scripts finish importing, navigate to the `Assets/MeatKit/` folder and right click > reimport the `Managed` folder.

> [!WARNING]
> If you are getting compile errors for missing the game's assembly and / or cannot see the MeatKit menu bar item, go to `Edit > Project Settings > Player` and in the `Other Settings` tab, clear the `Scripting Define Symbols` field and hit enter, then re-import the game's scripts.

## Confirm everything works
There are already some sample scenes / prefabs and build items ready to go in
the `Assets/Samples` folder, so to do a build of your mod and generate a Thunderstore
package all you have to do is select `MeatKit > Build > Build` from the menu bar.
The process might take a minute and when completed it will have built your mod
into the `AssetBundles` folder of your project.

Once you have your built package, you will need to import it into your R2MM profile.
You can do this by selecting all the files in the `AssetBundles` folder then right
clicking and selecting `Send To > Compressed (zipped) folder`. Finally in R2MM's
settings select `import local mod` and select that new zip file to import your mod.
(Note that after this first initial import, you may instead just copy and overwrite
the files in your profile folder if you know how.)

By following the steps above, you should be able to import the sample mod into your
profile and load into the scene and use the items.

## Summary
Congratulations, you've built your first mod using MeatKit!  
Next: [Changing the build settings](2_build_settings.md)
