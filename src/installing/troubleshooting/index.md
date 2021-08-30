---
title: Troubleshooting
---

# Troubleshooting
Read through this guide from top to bottom and follow the steps within to narrow down what is causing the issue and what potential fixes you may have.

> [!WARNING]
> This guide assumes you are using r2modman / Thunderstore Mod Manager.

## None of my mods are working / the game doesn't open
Make sure that a console window is opening up on your desktop alongside the game when you start the game modded. If one does not then it is highly likely that your issue is with r2modman and you should read their [troubleshooting guide](https://github.com/ebkr/r2modmanPlus/wiki/Why-aren%27t-my-mods-working%3F).

## Only some of my mods are working
First, please ensure you are running the latest version of the game and all your installed mods. It's important everything is up to date as that is the first thing you will be told to do if you can't solve your issue and decide ask for help. It's also possible that some mods require you to be running on the alpha branch, in which case you can also try opting in or out to see if that solves your issue.

Next, check the [log / log file](log_file.md) for errors and warnings. Often it will point out right away what the exact issue is and what mod is causing it. Below you can find some of the most common errors, but once you've discovered which mod is having issues you can select its article from further down to get more specific troubleshooting steps.

### Deli missing or outdated dependency
Log error:
```
[Error : Deli] X depends on Y 2.0.0, but...
``` 

Potential fixes:
* You have a mod X that requires Y to also be installed but it is outdated or missing. If the mod is installed, update it, and if not, install it.

### Outdated game
Log errors:
```
[Error  : Unity Log] ArgumentException: Undefined target method for patch method static bool TNHTweaker.Patches.TNHPatches::GenerateSentryPatrolPatch ...
[Error  : Unity Log] InvalidOperationException: Loader required for setup asset ...
```
... or ...
```
[Warning:      Deli] Could not load all types from WurstMod, Version=2.0.0.0, Culture=neutral ...
[Error  : Unity Log] Exception: This version of the game is not supported. Please update your game.
```

Potential fixes:
* Update your game to the latest version. If it is already up to date, try restarting Steam and or your computer as sometimes it can fix the Steamworks API not initializing correctly and reporting the correct game version.

## A specific mod

If you already know what mod you're having issues with or have found out by reading your log file you can select it from below to get more specific troubleshooting steps.
- [WurstMod and custom maps](wurstmod.md)

[!include[Getting Assistance](getting_assistance.md)]
