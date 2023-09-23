# Introduction to scripting for H3VR
This series of articles will guide you through setting up a BepInEx plugin for H3VR; a pure
code mod. In this first article you will download and open the template project for creating 
your mod.

## Required tools
The only tool you will need for this series of articles is Visual Studio, or another C# IDE.
Any version of Visual Studio will work, if you've previously installed the Unity Editor 5.6.3p4
it will likely have come with VS2017. If this is the case, you can use that. Otherwise, download 
and install [Visual Studio Community 2022](https://visualstudio.microsoft.com/downloads/).

Next, you will need to grab a copy of the template BepInEx plugin for H3VR. This can be downloaded
from [its GitHub page](https://github.com/H3VR-Modding/H3VRPluginTemplate) by clicking on the
'code' button in the top right of the page, then selecting 'download zip'. If you intend to publish
your mod on GitHub afterwards as well, you should click the 'use this template' button and then clone
your new repo afterwards.

## Opening the project
With the template project downloaded and extracted, open Visual Studio and on the landing screen
select 'open project or solution' from the right, navigate to `<extracted template>/plugin`, and
open `plugin.csproj`.

## Rebranding your project
Now with the project open you will likely want to change the name of it to match what you intend
to make with it. There are two files that require changes for this. On the right side of the
screen, there is a window called the 'solution explorer'. Inside the solution explorer you should
see a tree of everything contained in the template, you will want to expand this tree so that all
of the files are visible:

![image](https://github.com/H3VR-Modding/wiki/assets/22647801/85c438b0-8d90-4f3c-adbb-d009133c0de3)


The first place you need to change your plugin name is in the `plugin` project file itself. Right
click the `plugin` item right below the solution and select `Edit Project File`. This will open the
project file and at the top are the values you need to change.

* AssemblyName will be the name of the final file after a build, so make sure it doesn't contain any invalid characters
* Version must be a 3-part version number (x.y.z).
* Authors should just be your name, typically this should match your Thunderstore team name.
* AssemblyTitle is the 'pretty' name of your plugin.
* Description is used as the short description for Thunderstore uploads
* PackageProjectUrl is used as the URL for Thunderstore uploads. If you don't have a project URL you can just leave it blank.

![image](https://github.com/H3VR-Modding/wiki/assets/22647801/0f3bef98-555e-4e82-ba07-9cd971d897c5)


The second place you need to change stuff in is the `Plugin.cs` file. Here you just need to replace the `YourName` and
`YourPlugin` texts to that of your name and your plugin. These are both required to be valid C# identifiers so typically
they are written in `PascalCase` with no spaces or special characters. Both of these names only matter if you expect other
plugins to be interacting with your code.

![image](https://github.com/H3VR-Modding/wiki/assets/22647801/430f5236-f3a1-4af8-a157-328fc3e046c8)

Additionally, there are a couple more files that you will want to replace with your own when it comes time to upload to Thunderstore or share your mod.
* `icon.png` is your mod's icon. You should replace this with your own, it has to be 256x256.
* `README.md` is the long description for your mod on Thunderstore.
* `LICENSE` will be included with your mod when it is shared, so replace it with your own or just remove it.
* `manifest.json` is mostly automatically filled out but any additional dependencies you need from Thunderstore should go in here.

## Building your mod
To confirm everything still builds, go ahead and use the `Build > Build Solution` menu item to build
your plugin. If all goes well this should come back with a successful build.

After a successful build you can obtain a copy of your plugin by navigating to `<project folder>/plugin/bin/[Debug|Release]/net35/`.
Inside the build folder there will be several files but here are the relevant ones:

* `your_name.mod_name.dll`: This is your plugin file. Copy it to your modded profile in the `plugins/` folder and it will load the next time you start the game.
* `your_name.mod_name.dll.mdb`: When built in Debug mode, this file contains some extra debugging information. Copy it with your plugin to get additional error information.
* `your_name.mod_name.zip`: This is a thunderstore package. This can be directly uploaded to Thunderstore or imported as a local mod in r2mm/TMM. Use this if you're sharing your mod.

If everything worked, in the console you should see a line from BepInEx saying that your plugin was loaded.
With that, your project is setup and you're ready to write some code to begin doing things. The `Plugin.cs` file
of the template has additional information about how to get started.
