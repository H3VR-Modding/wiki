---
title: Installing External Mods
---

Depending on your [mod type](mod_types.md), mods you find outside of r2modman and Thunderstore mod manager need to be installed differently.

## Importing supported mods

If you happen to obtain a mod from somewhere else and would like to install it, please follow the below instructions for steps. For specific mod installation instructions that are packaged differently, see [Specific Mod Installation](specific_mod_installation.md).

The main way to install other mods not found through r2modman is to use the program's `Import Local Mod` feature.

Below is an image showing the button to import local mods:

![local mod import](../images/r2modman/settings/import_local_mod.png)

> [!WARNING]
> Mods must be formatted in a certain way to be eligible for importing. If your package is not in this format, you **cannot** use the import feature.

Please see the [Files Eligible for Import](import_eligible.md) document for more information on which files you are able to use the import local mod feature with.

Files imported by r2modman are placed into the `BepInEx/plugins/` folder of the current profile under their own named folder, unless stated by a folder otherwise like with Sideloader mods.

## Importing unsupported mods

If you do not have a `.deli` file, then installation is a little different. Please see [Mod Types](mod_types.md) the terms used below.

From r2modman settings, search for `Browse Profile Folder` and click on it. A folder should have appeared that looks like this:

```text
[Profile name you are using]/
    BepInEx/
    mods.yaml
    ...
```

![browse profile folder](../images/r2modman/settings/browse_profile_folder.png)

Determine the mod type you are using, and extract the files to their correct paths. The `BepInEx/` folder is contained inside of your profile folder, which you just opened.

> [!NOTE]
> If the below folders are not present, let the game make them for you. If they are not being created, make sure that you have run the game at least with Sideloader or Otherloader installed. Failure to do so will result in all of your mods within these folders to be wiped.

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

  - If you want the mod to load no matter what (as long as OtherLoader is installed), then use `H3VR/LegacyVirtualObjects/`. This folder is in the root folder, and should be avoided if possible.
