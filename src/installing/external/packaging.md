---
title: Pre-import Packaging
---

Some external mods may not be one of the [mod formats supported by r2modman](importing.md#supported-formats). These mods
can be converted to r2modman packages before importing, providing a near-seamless experience within r2modman.

## Sideloader

Create a directory named `Sideloader` and place the Sideloader mods within.

```text
Sideloader/
    asset1.hotmod
    asset2.h3mod
```

Zip the `Sideloader` folder itself to create an r2modman package ready for local import.

## Asset Bundles

Create a directory named `LegacyVirtualObjects` within another directory called `plugins` and place the asset bundles
within.

```text
plugins/
    LegacyVirtualObjects/
        bundle_a
        bundle_b
        bundle_b.manifest
```

> [!NOTE]
> `.manifest` files are not required. They are documentation files used by other modders and have no effect on the mod.

Zip the `plugins` folder itself to create an r2modman package ready for local import.
