# Getting Started

## Bonetome and Thunderstore

[**Bonetome**](https://bonetome.com/h3vr/) and [**Thunderstore**](https://h3vr.thunderstore.io) are the two main sites to get mods from. Currently, you want to use Thunderstore first as Bonetome is being phased out.

Bonetome is old, and still has old installation instructions on the mod page. Please ignore these. It does however have a larger mod database, all compatible with the new installation method.

Thunderstore is the current standard of installing mods, and is meant to be used with the mod manager [**r2modman**](https://h3vr.thunderstore.io/package/ebkr/r2modman/) or [Thunderstore mod manager](https://www.overwolf.com/app/Thunderstore-Thunderstore_Mod_Manager). It is ***highly*** recommended to use one of these when installing mods. Since they work essentially the same, whenever you see a reference to r2modman you can exchange it with TSMM.

The rest of this document assumes you have r2modman installed, please go to the [Manual Installation](Manual-Installation.md) section of this document if you would like to avoid using a mod manager.

## Installing mods via r2modman

Please open the [Mod Types](Mod-Types.md) file in another tab and read over it. It contains a list of the three different mod types contained within the modding community.

**NOTE:** If you have installed mods previously from another storefront, please preform a clean install. Guide on how to do it is located [here](Starting-Fresh.md).

Once you have installed r2modman and opened it, you will be greeted by a page asking you which game you would like to manage. In our case, we want to manage H3VR so click on that. It will ask you to create a profile or select the default one. Its up to you which you use, the default one cannot be deleted, but comes as an empty profile for new users.

You will then be greeted to the main interface shown below. Every time you want to run the game with mods, you will ned to press the `Run Modded` button in the top left and your game will run with the mods listed under the `Installed` section on the left.

![image](Images/Getting-Started-Greeted.png)

r2modman contains a built in list of mods in their `Online` section. Depending on what you download from the storefront, it will download any other mods it needs to run. This means all you need to worry about is the content mods you are downloading, and not whats needed to run it. The [Mod Types](Mod-Types.md) page goes over the basics on which mods require what. This process also works in reverse, if you were to uninstall a mod that other mods depend on, they will also be uninstalled.

From that `Online` section in r2modman, install anything you want by clicking on it, then by clicking on the `Download` button. Below is a picture of the `Wurstmod` dependency as an example.

![image](Images/Gettings-Started-Wurstmod.png)

## Importing old mods

If you happen to obtain a mod from somewhere else and would like to install it, please follow the below instructions for steps. For specific mod installation instructions that are packaged differently, see [Specific Mod Installation](Specific-Mod-Installation.md).

The main way to install other mods not found through r2modman is to use the program's `Import Local Mod` feature. As of writing, this only works with Deli Mods and Sideloader mods, although most Sideloader mods that are uploaded to other sites are incompatible with r2modman's importing feature and should be verified to have the correct folder structure before attempting to import them.

Below is an image showing the button to import local mods:

![image](Images/Getting-Started-Import-Local.png)

Here is the file structure required for Sideloader mods to be eligible for r2modman importing:

```text
AMod.zip/
    Sideloader/
        asset1.hotmod
        asset2.h3mod
```

If the zip you downloaded was from bonetome and not in the correct format, you can either install the mod manually (shown below), or use [Ebkr's BT2TS tool](https://h3vr.thunderstore.io/package/ebkr/BT2TS/). The folder generated will have the correct contents that just need to be packaged as a `.zip` file (done so by right-clicking on the selected files and pressing the `Compressed (zipped) file` option under the `Send To` sub-menu) and imported like normal.

The same goes for Deli mods. Below are some examples on which file structures are supported.

Example 1:

```text
AMod.deli
```

Example 2:

```text
AZip.zip/
    AMod.deli
```

Example 3:

```text
AZip.zip/
    AMod.deli
    BMod.deli
    CMod.deli
    IAmSuperCool.txt
```

In `Example 3`, the mods will all be installed under the same entry in r2modman.

Files imported by r2modman are placed into the `BepInEx/plugins/` folder of the current profile under their own named folder, unless stated by a folder otherwise like with Sideloader mods.

If you do not have a `.deli` file, then installation is a little different. Please see [Mod Types](Mod-Types.md) the the terms used below.

1. From r2modman settings, search for `Browse Profile Folder` and click on it. A folder should have appeared that looks like this:

```text
[Profile name you are using]/
    BepInEx/
    mods.yaml
    ...
```

![image](Images/Getting-Started-Browse-Profile.png)

Determine the mod type you are using, and extract the files to their correct path.types.

- Sideloader mods go into the `BepInEx/Sideloader/` folder.
- Asset bundles go into the `BepInEx/plugins/devyndamonster-otherloader/LegacyVirtualObjects/` folder.

**NOTE:** If the aforementioned folders are not present, make sure you have run the game modded at least once without errors with the required mods installed.

## Troubleshooting

For the most common problems, please see the [Why aren't my mods working?](https://github.com/ebkr/r2modmanPlus/wiki/Why-aren%27t-my-mods-working%3F) page provided by Ebkr.

For less common problems, see the [Troubleshooting](Troubleshooting.md) file for more details before contacting someone in the H3VR discord channel #modding-help.
