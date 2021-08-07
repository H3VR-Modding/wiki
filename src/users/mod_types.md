---
title: Mod Types
---

Mods are split into different types, depending on what they rely on. **ALL** mods require [BepInEx](https://h3vr.thunderstore.io/package/BepInEx/BepInExPack_H3VR/).

## Deli

Deli mods require [Deli 0.4.1](https://h3vr.thunderstore.io/package/DeliCollective/Deli/), and are denoted by a `.deli` file extension.

Some mods may have this extension, but also require [OtherLoader](https://h3vr.thunderstore.io/package/devyndamonster/OtherLoader/). These mods include gun mods and custom ammo mods.

## Sideloader

Sideloader mods require [Sideloader](https://h3vr.thunderstore.io/package/denikson/H3VR_Sideloader/) and [XUnity ResourceRedirector](https://h3vr.thunderstore.io/package/bbepis/XUnity_ResourceRedirector/). These mods include sound and skin mods, and very rarely gun mods, while having the file extensions of `.hotmod` and `.h3mod`.

## Asset Bundles

Asset bundles are loaded through [OtherLoader's](https://h3vr.thunderstore.io/package/devyndamonster/OtherLoader/) legacy loading and have no file extension (`MyFile.txt` has the `.txt` extension, while `MyFile` does not). These bundles are almost always a firearm of some sorts, and can be paired with an accompanying `.manifest` file. This `.manifest` file is not needed for load the mod.
