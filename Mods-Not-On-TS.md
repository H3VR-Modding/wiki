# Mods not on TS

- [Mods not on TS](#mods-not-on-ts)
  - [Importing supported mods](#importing-supported-mods)
  - [Importing unsupported mods](#importing-unsupported-mods)

## Importing supported mods

If you happen to obtain a mod from somewhere else and would like to install it, please follow the below instructions for steps. For specific mod installation instructions that are packaged differently, see [Specific Mod Installation](Specific-Mod-Installation.md).

The main way to install other mods not found through r2modman is to use the program's `Import Local Mod` feature. **CAUTION:** This does not work for all mods! As of writing, this only works with Deli Mods and Sideloader mods, although most Sideloader mods that are uploaded to other sites are incompatible with r2modman's importing feature and should be verified to have the correct folder structure before attempting to import them.

Below is an image showing the button to import local mods:

![image](Images/Getting-Started-Import-Local.png)

Here is the file structure required for Sideloader mods to be eligible for r2modman importing:

```text
AMod.zip/
    Sideloader/
        asset1.hotmod
        asset2.h3mod
```

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

## Importing unsupported mods

If you do not have a `.deli` file, then installation is a little different. Please see [Mod Types](Mod-Types.md) the the terms used below.

From r2modman settings, search for `Browse Profile Folder` and click on it. A folder should have appeared that looks like this:

```text
[Profile name you are using]/
    BepInEx/
    mods.yaml
    ...
```

![image](Images/Getting-Started-Browse-Profile.png)

Determine the mod type you are using, and extract the files to their correct paths. The `BepInEx/` folder is contained inside of your profile folder, which you just opened.

- Sideloader mods go into the `BepInEx/Sideloader/` folder.
- Asset bundles go into the `BepInEx/plugins/devyndamonster-otherloader/LegacyVirtualObjects/` folder. **IMPORTANT:** Once Otherloader updates past 0.3.0, the folder will be changed to `BepInEx/plugins/LegacyVirtualObjects/`.

**NOTE:** If the aforementioned folders are not present, make sure you have run the game modded at least once without errors with the required mods installed. DO NOT create them yourself.
