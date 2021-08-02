# Troubleshooting

If you are reading this and are not using [r2modman](https://h3vr.thunderstore.io/package/ebkr/r2modman/) or [Thunderstore mod manager](https://www.overwolf.com/app/Thunderstore-Thunderstore_Mod_Manager), it is no use to you, and no one in the community will help you with your problems. Make sure you read the [modding guide](Getting-Started.md) carefully and read all notes.

This document was last re-written August 2, 2021. If significant time has passed, please seek help  in the main discord server channel `#modding-help`, in the `#h3vr` channel in the Thunderstore server, or `#general-help` in homebrew.

- [Troubleshooting](#troubleshooting)
  - ["Only some of my mods work"](#only-some-of-my-mods-work)
  - [My controllers are not my actual controllers](#my-controllers-are-not-my-actual-controllers)
  - [My controllers don't move](#my-controllers-dont-move)

The #1 way to find what is causing issues in your mod loading is by checking the log. After using r2modman's setting option to `Browse Profile Folder`, navigate to the `BepInEx/LogOutput.log` file and open it in any notepad program. It's recommended to use [VSCode](https://code.visualstudio.com), an advanced but simple to use text editor, and this guide assumes you have something similar installed that displays file specific formatting.

## "Only some of my mods work"

This can be caused by a few things, but usually it is Deli/Stratum not finding a dependency required for a mod or a mod throwing an error while loading. This causes all related mods to stop loading.

1. [Open your BepInEx Log](BepInEx-Log.md).
2. Once open, look for large red blocks of text with the `[Error : Unity Log]` or `[Error : BepInEx Log]` tag. Sub-items below are examples, please read through them to see which one is most like your problem.
    1. If you have TnHTweaker installed, you might see something like this:

        ```log
        [Error  : Unity Log] ArgumentException: Undefined target method for patch method static bool 
        TNHTweaker.Patches.TNHPatches::GenerateSentryPatrolPatch ...
        ```

        If so, you might also see:

        ```log
        [Error  : Unity Log] InvalidOperationException: Loader required for setup asset ...
        ```

        This means you are on an older version of the game that the mod cannot support anymore. Please update your game to at least build `7116219`. Check [this page](https://steamdb.info/app/450540/depots/) for more details on what branch you need to be on.

    2. If you have Wurstmod installed, you might see something like this:

        ```log
        [Warning:      Deli] Could not load all types from WurstMod, Version=2.0.0.0, Culture=neutral ...
        ```

        Followed by:

        ```log
        [Error  : Unity Log] Exception: This version of the game is not supported. Please update your game.```
        ```

        This means you are on an older version of the game that the mod cannot support anymore. Please update your game to at least build `7116219`. Check [this page](https://steamdb.info/app/450540/depots/) for more details on what branch you need to be on.

    3. You have deprecated mods installed. This includes, but is not limited to:

        - Deli.H3VR, not to be confused with [Deli](https://h3vr.thunderstore.io/package/DeliCollective/Deli/).

    4. You have outdated versions of mods. Please make sure you are using the latest dependency versions and are fully updated through r2modman (there will be icons next to those that are outdated, and a large yellow banner will say something is outdated).

    You might see something like:

    ```log
    [Error : Deli] Mod depends on dependency 2.0.0, but only version present is @0.1.2
    ```

## My controllers are not my actual controllers

You have [AlternativeHands](https://h3vr.thunderstore.io/package/AshHat/AlternativeHands/) installed.

## My controllers don't move

You have old versions of [Stratum](https://h3vr.thunderstore.io/package/Stratum/Stratum/) and [Mason](https://h3vr.thunderstore.io/package/Stratum/Mason/) installed, make sure you are using `1.0.1+` for both of them.
