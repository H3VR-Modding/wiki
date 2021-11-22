---
title: Manual Installation
---

Some external mods may not be one of the [mod formats supported by r2modman](importing.md#supported-formats). These mods
can instead be manually installed as a last resort.

From r2modman's settings, search for `Browse Profile Folder` and click on it.

![browse profile folder](../images/r2modman/settings/browse_profile_folder.png)

A folder should have appeared that looks like this:

```text
[Name of current profile]/
    BepInEx/
    mods.yaml
    ...
```

Determine the format of the mod, and extract its files to the correct paths. The `BepInEx/` folder is contained inside
of your profile folder, which you just opened.

## Sideloader

Sideloader mods go into the `BepInEx/Sideloader/` folder.

> [!NOTE]
> If the folder is not present, let the game make it for you. If they are not being created, ensure that you have run the game at least once with Sideloader installed. Failure to do so will result in all of your Sideloader mods being wiped.

## Asset Bundles

First, enter the `BepInEx/plugins/` folder. Then, create a new folder. It can be named anything, but it's recommended to
create one with a distinct name like `_LVO`. Create a folder within that folder, and name it `LegacyVirtualObjects`.

For example:

```text
BepInEx/
    plugins/
        _LVO/
            LegacyVirtualObjects/
                bundle_a
                bundle_b
                bundle_b.manifest
```

> [!NOTE]
> `.manifest` files are not required. They are documentation files used by other modders and have no effect on the mod.
