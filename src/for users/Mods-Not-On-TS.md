# Mods not on TS

Depending on your [Mod-Type](Mod-Types.md), mods you find outside of r2modman and Thunderstore mod manager need to be installed differently.

## Importing supported mods

If you happen to obtain a mod from somewhere else and would like to install it, please follow the below instructions for steps. For specific mod installation instructions that are packaged differently, see [Specific Mod Installation](Specific-Mod-Installation.md).

The main way to install other mods not found through r2modman is to use the program's `Import Local Mod` feature. **CAUTION:** This does not work for all mods! As of writing, this only works with Deli Mods.

Below is an image showing the button to import local mods:

![image](images/getting-started/Import-Local.png)

Here is the file structure required for Sideloader mods to be eligible for r2modman importing:

```text
AMod.zip/
    Sideloader/
        asset1.hotmod
        asset2.h3mod
```

Here is the structure required for asset bundles:

```text
AMod.zip/
    LegacyVirtualObjects/
        moda
        modb
        modb.manifest
```

Please note that the `.manifest` file is not required.

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

If you do not have a `.deli` file, then installation is a little different. Please see [Mod Types](Mod-Types.md) the terms used below.

From r2modman settings, search for `Browse Profile Folder` and click on it. A folder should have appeared that looks like this:

```text
[Profile name you are using]/
    BepInEx/
    mods.yaml
    ...
```

![image](images/Browse-Profile.png)

Determine the mod type you are using, and extract the files to their correct paths. The `BepInEx/` folder is contained inside of your profile folder, which you just opened.

- Sideloader mods go into the `BepInEx/Sideloader/` folder.
- Asset bundles can go in two different places depending on what functions you want:
  - If you want to keep profile independence: `BepInEx/plugins/../LegacyVirtualObjects/`. `/../` just means any folder. It's recommended to make yours recognizable, like `_LVO/`.

    Example:

    ```text
    BepInEx/
        plugins/
            _LVO/
                LegacyVirtualObjects/
                    amod
                    bmod
                    bmod.manifest
    ```

  - If you want the mod to load no matter what (as long as Otherloader is installed), then use `H3VR/LegacyVirtualObjects/`. This folder is in the root folder, and should be avoided if possible.

**NOTE:** If the aforementioned folders are not present, make sure you have run the game modded at least once without errors with the required mods installed. DO NOT create them yourself.
