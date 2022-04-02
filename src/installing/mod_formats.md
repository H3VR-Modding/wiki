---
title: Mod Formats
uid: formats
---

Mods are packaged in a few different ways, partially due to what they rely on. However, **all mods**
require [BepInEx](https://h3vr.thunderstore.io/package/BepInEx/BepInExPack_H3VR/).

## r2modman Packages

File Extension: `zip`

r2modman packages encompass all mods that can be used within r2modman. They may contain the formats below as well, but
aren't required to.

### Thunderstore Packages

Thunderstore packages are a subset of r2modman packages that contain additional metadata. All mods found
on [Thunderstore](https://h3vr.thunderstore.io) are Thunderstore packages. Much like how all squares are rectangles but
not all rectangles are squares, all Thunderstore packages are r2modman packages but not all r2modman packages are
Thunderstore packages.

## BepInEx Plugins

File Extension: `dll`

BepInEx plugins have no additional requirements.

## Deli Mods

File Extension: `deli`

Deli mods require [Deli 0.4.1](https://h3vr.thunderstore.io/package/DeliCollective/Deli/), but they may also rely on
other mods. For instance, Deli mods that contain custom items or ammo also
require [OtherLoader](https://h3vr.thunderstore.io/package/devyndamonster/OtherLoader/).

> [!NOTE]
> File extensions are disabled by default in File Explorer. In that case, uncommon file extensions will appear under `File Type` column.

## Sideloader Mods

File Extension: `hotmod` or `h3mod`

Sideloader mods require [Sideloader](https://h3vr.thunderstore.io/package/denikson/H3VR_Sideloader/), which in turn
requires [XUnity.ResourceRedirector](https://h3vr.thunderstore.io/package/bbepis/XUnity_ResourceRedirector/). These mods
mostly replace assets, such as audio and textures, but can add items.

## Asset Bundles

File Extension: none (shows as the `FILE` file type)

Asset bundles are loaded through [OtherLoader](https://h3vr.thunderstore.io/package/devyndamonster/OtherLoader/)'s
legacy loading system. These bundles are almost always a firearm, and are often accompanied with a `.manifest` file.
This `.manifest` file is not needed for load the mod.

## TnH Music

File Extension: `.bank`

TnH Music requires [PTNHBGML](https://h3vr.thunderstore.io/package/Potatoes/Potatoes_TNH_BGM_Loader/).
