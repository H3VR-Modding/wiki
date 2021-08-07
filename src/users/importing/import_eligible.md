---
title: Files Eligible for Import
---

See each section below for each [mod type](../mod_types.md)'s required packaging rules for being eligible for import into r2modman or Thunderstore mod manager.

## Deli

Deli mods can be imported without a `.zip` file encapsulating them, or inside of a `.zip`.

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

In `Example 3`, the mods will all be installed under the same entry in r2modman allowing you to add, disable, or remove them easily. Keep in mind that you cannot modify imported mods, so importing them one at a time is recommended.

## Sideloader

Sideloader mods must be placed inside of a folder called `Sideloader` inside of a `.zip` file. No exceptions.

```text
AMod.zip/
    Sideloader/
        asset1.hotmod
        asset2.h3mod
```

## Asset Bundles

Asset bundles are similar to Sideloader mods, except they must be placed inside of a folder called `LegacyVirtualObjects`.

```text
AMod.zip/
    LegacyVirtualObjects/
        moda
        modb
        modb.manifest
```

Please note that the `.manifest` file is not required.
