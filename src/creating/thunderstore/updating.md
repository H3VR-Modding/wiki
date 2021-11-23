---
title: Updating Your Thunderstore Package
---

The following are steps on how to update your mod that is current hosted on Thunderstore.

1. Obtain your mod files. This can either be done by downloading your mod from your Thunderstore page, or by having a
   copy handy from when you uploaded it in the first place. You should have something like this:

    ```text
        MyMod/
            [mod files]
            manifest.json
            icon.png
            README.md
    ```

2. Open your `manifest.json`, and increase the `"version_number"` according to [semantic versioning](https://semver.org)
   . In short, if you are making a patch (minor change, fix) increase the third number (1.2.3 -> 1.2.4). If you are
   making a larger change increase the second number (1.2.3 -> 1.3.0). If you are making an extremely big change that
   adds or changes major things, increase the first number (1.2.3 -> 2.0.0).
3. Change your [mod files] to their newer version, making sure to follow [Thunderstore's packaging rules](creating.md).
4. Zip your files together once more for upload.
5. Upload your mod in the same place you uploaded it the first time, making sure to select the correct tag(s).
