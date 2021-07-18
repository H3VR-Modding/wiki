# Specific Mod Installation

Specific mods that aren't currently updated yet have different installation instructions. This page assumes you know how to navigate to your r2modman profile folder to reach `BepInEx/`, and how to import local mods using r2modman.

## TnHTweaker 1.6.6

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
