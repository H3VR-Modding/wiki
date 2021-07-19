# Updating your TS Mod

The following are steps on how to update your mod that is current hosted on Thunderstore. The steps imply that you need to re-upload your entire mod.

1. Extract your `manifest.json` file from your zipped mod file.

    ```text
    A folder/
        manifest.json
        YourMod.zip
    ```

2. Modify your `manifest.json`'s `"version_number"` to be higher than it's current value according to [semantic versioning](https://semver.org).
3. Drag the saved manifest back into your zipped mod along with any mod files that have been updated, making sure they follow [Thunderstore Packaging rules](Thunderstore-Packaging.md).
4. Re-upload your new zipped mod file to Thunderstore.
