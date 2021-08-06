# Updating your TS Mod

The following are steps on how to update your mod that is current hosted on Thunderstore.

These instructions are accurate as of July 28th, 2021, and are subject to change without notice once updates come to this process.

1. Obtain your mod files. This can either be done by downloading your mod from your Thunderstore page, or by having a copy handy from when you uploaded it in the first place. You should have something like this:

    ```text
    MyMod/
        [mod files]
        manifest.json
        icon.png
        README.md
    ```

2. Open your `manifest.json`, and increase the `"version_number"` according to [semantic versioning](https://semver.org). An example being a minor update, which would increase `1.1.1` to `1.1.2`.
3. Change your [mod files] to their newer version, making sure to follow [Thunderstore Packaging rules](Thunderstore-Packaging.md).
4. Zip your files together once more for upload.
5. Upload your mod in the same place you uploaded it the first time, making sure to select the correct tag(s).
