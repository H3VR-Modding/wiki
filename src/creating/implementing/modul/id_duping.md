---
title: ID Duping a Modul Weapon
---

The Item ID of your weapon is what makes it spawn correctly.

The main problem of this is that your modular frame (and nothing else) will spawn in Take and Hold without any
attachments (which is bad).

Another interesting feature is having attachments pre-attached onto your receiver. This is done by using
Cityrobo's [`PreattachedAttachment` script](https://github.com/cityrobo/H3VR_Mods/blob/master/PreattachedAttachment/PreattachedAttachment.cs) (
more information in the [tutorial doc](../pre-attached_attachments.md)). However, you can't simply use the script, as
every time you vault a weapon with different attachments it will spawn both the default ones you specify and the new
ones the user applied.

The way to correctly get these features working is Item ID duping:

1. In your Unity assets tray where you can see your modular receiver, right-click and click `Show in Explorer`.
2. Copy the receiver prefab (the file with the `.prefab` extension), the Item ID, and the Item Spawner ID.
3. Create a new folder somewhere for your new duped items.
4. Paste your copied prefabs, and rename them with the `_DUPE` suffix to make sure you don't confuse them with your
   originals.
5. In your duped prefab:
    1. Remove all pre-attached attachments you might have added.
6. In your duped Item ID:
    1. Turn the `O Sple` value off. This disables the prefab this Item ID is pointing to from being spawned in Take and
       Hold.
    2. Point the `Asset Name` to your new duped prefab.
    3. Change the `Item ID`, `Display Name`, and `Spawned from Id` to another value. This could mean just adding "_Dupe"
       to the end.
7. In your Item Spawner ID:
    1. Change the `Item ID` to what you called it in the last step.
    2. If you want to hide this attachment-less receiver, turn `Is Displayed In Main Entry` and `Is Unlocked By Default`
       to their off values (unchecked).
8. Finally the most important step, in your original prefab of your weapon:
    1. Set the `Object Wrapper` to your duped Item ID, not the original. Your original Item ID should still exist, and
       should still be set to your shown Item Spawner ID.

This was a lot to take in, so there is also an infographic in hopes to clear some things up.

![info](images/UnityEditor/id_duping_infographic.png)

Thanks to Meat_Banano for contributing to the writing of this guide, and Jessica for discovering the idea behind it.
