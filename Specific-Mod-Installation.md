# Specific Mod Installation

Specific mods that aren't currently updated yet have different installation instructions. This page assumes you know how to navigate to your r2modman profile folder to reach `BepInEx/`, and how to import local mods using r2modman.

## LSIIC v1.4.0

The release can be found [here](https://github.com/BlockBuilder57/LSIIC/releases/tag/v1.4).

LSIIC (Lets see if it crashes) comes as the following `.zip` file:

```text
LSIIC-v1.4.zip/
    BepInEx/
        monomod/
            LSIIC/
                Assembly-CSharp.LSIIC.mm.dll
        plugins/
            LSIIC/
                LSIIC.Core.dll
                LSIIC.SmartPalming.dll
                LSIIC.VirtualObjectsInjector.dll
    Mods/
        LSIIC.h3mod
```

To install, please follow the following steps:

1. Install Sideloader through r2modman
2. Run your game once until it has finished loading once using the `Run modded` button in r2modman.
3. Click the `Browse profile folder` button in r2modman's settings menu to open your profile folder.
4. Drag and drop the `LSIIC-v1.4.zip/BepInEx/` folder into your profile folder.
5. Confirm that you now have `[your profile]/BepInEx/plugins/LSIIC/` and `[your profile]/BepInEx/monomod/LSIIC`.
6. Extract the `LSIIC-v1.4.zip/Mods/LSIIC.h3mod` file to `[your profile]/BepInEx/Sideloader/`.
7. (Optional) Run the game once to confirm that it has been installed by opening your BepInEx log at `[your profile folder]/BepInEx/LogOutput.log` and searching for "LSIIC", confirming there are no other errors.

## TnHTweaker v1.6.6

[**THIS IS OUTDATED, PLEASE USE THE THUNDERSTORE RELEASE**](https://h3vr.thunderstore.io/package/devyndamonster/TakeAndHoldTweaker/)

TnHTweaker comes as the following `.zip` file:

```text
TakeAndHoldTweaker.Unzip.Me.zip/
    Deli/
        mods/
            TakeAndHoldTweaker.deli
    TnHTweaker/
        CachedCompatibleMags.json
        MagazineCacheBlacklist.json
```

1. Import the `.deli` file (`TakeAndHoldTweaker.Unzip.Me.zip/Deli/mods/TakeAndHoldTweaker.deli`) using r2modman's `Import Local Mod` feature like you would any other `.deli` file.
2. Copy the `TnHTweaker/` folder (`TakeAndHoldTweaker.Unzip.Me.zip/TnHTweaker/`) to your root `H3VR/` directory. You can get here by right-clicking on the game through steam and clicking `Browse local files` under the `Manage` sub-menu.

**Recommended:** Download this [Magazine cache blacklist](Files/MagazineCacheBlacklist.json) and replace the one located inside of `H3VR/TnHTweaker/`, as it is a more up to date version and fixes specific mags from spawning alongside the wrong guns.

Files generated using the Deli config option will be created inside of the root `H3VR/TnHTweaker` folder as of TnHTweaker 1.6.6, and may change in future versions. If the version you installed is higher than 1.6.6, please see their releases page for more information.
