---
title: 2. Adding Your H3VR Content To Your Package
---

Depending on the [mod format](xref:formats), you will need to package your mod differently by using folders.

> [!NOTE]
> The `[Your mod name/]` line refers to the `.zip` file you will upload to Thunderstore.

## Stratum mods

To create a stratum mod, check out
the [Mason Getting Started guide.](https://h3vr-modding.github.io/Mason/getting_started/index.html)

To build your Stratum mod, you must first make your manifest, so you might want to check out the second part first.

## Deli mods

No folder needed, place your `.deli` file inside of your mod folder.

```text
[Your mod name]/
    [Your Deli File].deli
    [Your Second Optional Deli File].deli
    icon.png
    manifest.json
    README.md
```

## Sideloader mods

Place your `.h3mod` or `.hotmod` file inside of a folder called `Sideloader` inside of your mod folder. A `.h3mod`
and `.hotmod` are identical; they just end differently.

```text
[Your mod name]/
    Sideloader/
        [Your Sideloader File].h3mod
        [Your Second Optional Deli File].hotmod
    icon.png
    manifest.json
    README.md
```

## Asset bundles

Place your assets inside of a folder inside of your mod folder called `LegacyVirtualObjects/`.

```text
[Your mod name]/
    plugins/
      LegacyVirtualObjects/
        [Your assetbundle file]
        [Your assetbundle file].manifest (optional)
    icon.png
    manifest.json
    README.md
```

## TnH Music

No folder needed, place your `.bank` file inside of your mod folder.

```text
[Your mod name]/
    MX_TAH_[MyEpicMusicModNameHere].bank
    icon.png
    manifest.json
    README.md
```

Now that your files are compiled together, zip your files together and head on over
to [Thunderstore](https://h3vr.thunderstore.io) to upload your mod. Make sure to log in, then press the `Upload` button
in the top left. Set it's category, drag your `.zip`, and hit upload.
