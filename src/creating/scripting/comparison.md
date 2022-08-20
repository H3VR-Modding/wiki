# Tool Comparisons
When it comes to writing custom scripts and patches, there are sometimes multiple options for which tools you can use. This article will compare each and show you when each tool may be better to use.

## Scripting
For creating custom scripts there are historically 3 options, however only two of them are recommended now. These options are a BepInEx plugin script library, a MonoMod plugin script library, and writitng scripts directly in MeatKit. Of the three, the MonoMod plugin script library is _not recommended_ as it has a some major downsides that make its use undesirable. 

### BepInEx plugin script library
BepInEx plugin script libraries are created the same as any regular BepInEx plugin, after the initial setup you're free to start making your own scripts by creating a new class and having that class inherit `UnityEngine.MonoBehaviour`. Your script library is then distributed as it's own mod on Thunderstore that other mods will depend on and use.

A script library as it's own mod has two main advantages: your scripts are easily re-used by others, and if you should need to update your scripts for any reason, those updates are immediately applied to any mods that use your scripts.

**Examples of some mods using this method:**
* H3VR Utilities (comes with support for both BepInEx and MonoMod)
* Open Scripts
* Atlas

### MonoMod plugin script library
While this method is no longer recommended it is still used by a few mods and for that reason it is included in the comparison. Like BepInEx plugin script libraries, MonoMod plugin script libraries are also distributed as their own mod and share the same advantages, however there are also two major downsides to this approach.

MonoMod plugins are not loaded in the same way that BepInEx plugins are loaded. When a BepInEx plugin is loaded, it is loaded as-is, exactly how it was created. MonoMod plugins on the other hand are _injected_ into the game's DLL rather than being loaded as their own DLL. This is generally undesirable behaviour, and as a result of this it makes working with MonoMod plugins difficult. They are more difficult to debug, more difficult to interface with from other plugins, and more difficult to differentiate from vanilla game scripts.

**Examples of some mods using this method:**
* H3VR Utilities (comes with support for both BepInEx and MonoMod)

### MeatKit scripting
If you're working inside a MeatKit project, you've already got scripting support built in. Just like normal scripting in Unity; you can create a `.cs` file, write your script, and then apply it to whatever you're working on in MeatKit. The only thing you need to watch out for is making sure it's placed in the appropriate namespace so that it will get included in the build of your mod.

This is a great option for mods with bespoke scripts. If you need a special script for just one mod, then it may not make sense to create a script library for it when it can just be included in that one mod directly. A side effect of this method is also that the scripts get baked into your mod at build-time and won't be affected by other mods, so this method has also appealed to those making custom game modes because it gives the map authors the ability to modify the scripts as they see fit without needing to worry about things breaking if another map with the same gamemode releases.

**Examples of some mods using this method:**
* Remote C4 Drone
* The Gun Game gamemode maps
