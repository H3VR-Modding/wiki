---
title: Creating a Thunderstore Package
---

Depending on the [mod format](xref:formats), you will need to package your mod differently by using folders:

## Deli mods

No folder needed, place your `.deli` file inside of your mod folder
  
```text
[You mod name]/
    asset1.deli
    asset2.deli
    icon.png
    manifest.json
    README.md
```

## Sideloader mods

Place your `.h3mod` or `.hotmod` file inside of a folder called `Sideloader` inside of your mod folder

```text
[You mod name]/
    Sideloader/
        asset1.h3mod
        asset2.hotmod
    icon.png
    manifest.json
    README.md
```

## Asset bundles

Place your assets inside of a folder inside of your mod folder called `LegacyVirtualObjects/`.

```text
[You mod name]/
    plugins/
      LegacyVirtualObjects/
        asset
        asset.manifest (optional)
    icon.png
    manifest.json
    README.md
```

## TnH Music

No folder needed, place your `.bank` file inside of your mod folder
  
```text
[You mod name]/
    MX_TAH_[MyEpicMusicModNameHere].bank
    icon.png
    manifest.json
    README.md
```
