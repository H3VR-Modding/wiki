---
title: Grenades
---

This guide assumes you know [the basics](the_basics.md) of implementation and the common terms used, as well as how to
navigate the Unity window.

## Step 1: Materials and Pre-requisites

The common ones:

- [Unity 5.6.3](https://unity3d.com/get-unity/download/archive)
- [AssetStudioGUI](https://drive.google.com/file/d/18P59DJL0tGRSTXaxXknVl9lFiLJ27Y_v/view)
- [H3 Unity Template](https://drive.google.com/file/d/1bRHZrJxgPmE1PJGR_ty3i78mBfLTZQiB/view?usp=sharing)

Other than the tools, you should have the assets for the grenade type of weapon you are creating handy. If you don't
already have the moving parts separated into separate `.obj` files or `.fbx` file, then do that now.

List of common moving parts:

- Pin(s)
- Lever(s)/Spoon(s)

## Step 2: Importing the reference

Once you are inside of your Unity template, hopefully copied from the one you downloaded, you will want to prefab load a
grenade from H3 that behaves similarly to the one you want to implement. [The basics](the_basics.md) guide goes over
this, but for a specific example lets do it again.

Open your file explorer and go to your root H3VR folder, then navigate to `H3VR/h3vr_data/StreamingAssets/`.

Copy the `assets_resources_objectids_weaponry_support` and `assets_resources_objectids_weaponry_support.manifest` files
into your Unity project, under your `Assets/` folder.

You should have empty game object with the prefab loader script component in the unity window. If you don't have one,
you can right-click in the `Hierarchy` on the left and click the `Create Empty` button. Once selected, in
the `Inspector` tab on the right, click on the `Add Component` button and search for the prefab loader script.

Once you have a prefab loader object ready, fill it out with the fields you need.

1. Open the `.manifest` file in any notepad program.
2. Find the `.prefab` path you want to copy. Note: `.asset`s cannot be used.
3. Fill in your prefab loader object with the path to your asset bundle you are extracting from, and the path you copied
   from its `.manifest` file.

### Prefab loader example

Prefab Path: `Assets/assets_resources_objectids_weaponry_support`

This is the location of the bundle you copied into your Unity project.

Prefab_to_Load: `Assets/Weaponry/Explosives/PinnedGrenades/Grenades/PinnedGrenade_M67.prefab`

This is the path copied from the manifest file.

Press the pause button then the play button at the top of the screen, then drag the clone from your Hierarchy into your
assets tray. Press play again.

## Step 3: Required changes

Like usual, you need to replace the missing materials of the grenade with your own. [The basics](the_basics.md) goes
over this, and will not be repeated on how to import assets into unity.

The following things need assets:

- Lever_Real
    - This is the lever that pops off.
- Lever_Fake
    - This is the lever that sits on the grenade normally.
- Pin
    - This can have multiple objects (Pin, Pin(1), etc.), and are the sticks that are pulled out.
- Ring
    - Similar to the Pin, this can have multiple items that need changing. These are physics active and flop around.
- _Body
    - Name changes depending on the prefab used to import. This would be the housing of the grenade.

Double check that you are using Alloy materials for the meshes on these parts, and not standard unity ones.

## Step 4: Main script changes

Make sure you place your ItemID in the object wrapper here. Make sure in your ItemID that the Asset Name is the path to
your prefab (such as `Assets/MyGrenade/CoolNade.prefab`), and you set your category to what you need. Also make sure
that your Item ID field, Display Name field, and Spawned From Id fields are all the same as your Item ID field in your
item spawner ID. If you want your item to spawn in take and hold, make sure `O Sple` is set to true.

Some notable values:

- Throw Vel Multiplier
    - Self explanatory, how much the velocity of the object is multiplied once left from the hand
- Throw Ang Multiplier
    - A normalizer on throwing angles, keep it at 0.5.
- Move Intensity/Rot Intensity
    - These may be missing from your script, make sure they equal 1.
    - If they are, contact someone who mods for an updated script.
- Uses Gravity
    - Disable this if you want it to fly straight.
- Lever Joint
    - Make sure this is set to the Lever_Real in your Hierarchy.
- Fake Handle
    - Make sure this is set to the Lever_Fake in your Hierarchy.
- Real Handle
    - Make sure this is set to the Lever_Real in your Hierarchy.
- Lever Threshold
    - No idea, maybe how much it spins after its popped?
- Default fuse
    - Fuse time in seconds, range because its not always the same.
- Fuse On Spawn
    - Automatically pulls its pins when spawns. Think of martyrdom in call of duty.
- Fuse Timings
    - Reserved for the cyber grenade.
- Has Impact Fuse
    - Once popped, an impact with something physical will cause the fuse time to be set to 0.
    - Still needs a fuse time, will eventually explode (dunno how to get around this right now, more research needed).
- Impact Fuse Vel Threshold
    - Velocity needed in m/s to achieve a detonation.
- Impact Fuse Burn Down
    - Rate of how slow the default fuse will fuse (research needed).
- Spawn On Splode
    - The bread and butter of a grenade, see the next step for more details.
- Smoke Emitter
    - Spawns a specific smoke emitter object; rarely used.
- (Various audio events)
    - Make sure you rip these with Assetstudio and place them here, when previewing the prefab you clone you can see
      which clips are needed.

## Step 5: Spawn on Splode

This list is a list of objects that spawn at the origin of your grenade once it kills itself. These are used mainly for
explosion damage and smoke effects.

1. Search "wfx" in your Assets tray, then switch to the Asset Store tab.
2. Buy (free) the War FX pack and download it into your Unity template.

These assets are exactly the same as what Anton uses, modified a bit. You can drag them into your Hierarchy and select
them to see how they look. Double click to focus on their origin, and use the controls in the bottom right of the Scene
window to start/stop/restart the effect.

Once you find a nice effect, drag it beside your grenade in your Assets tray then rename it to something relevant.

There should be a missing item in the spawn on splode list, being the smoke effect (which you can fill in now). The
other one should be the explosion script. If its missing, make a new empty game object with the `Grenade Explosion`
component. You can right click on the cloned one (when you are pause/playing) and click copy component to avoid this as
well.
