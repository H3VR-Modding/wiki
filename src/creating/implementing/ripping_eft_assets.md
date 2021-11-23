---
title: Ripping Escape From Tarkov Assets
---

Tarkov assets are already scaled, require no texture work, and are high quality. Below is a guide to exporting them for
use in making custom mods.

You will need [AssetStudioGUI](https://drive.google.com/file/d/18P59DJL0tGRSTXaxXknVl9lFiLJ27Y_v/view).

1. Obtain a copy of EFT, either by [buying it](https://www.escapefromtarkov.com) or by downloading
   the [free singleplayer mod](https://www.sp-tarkov.com).
2. Browse the game files. By default they are installed to `C:\Battlestate Games\EFT` (paid version).
3. Next, navigate to `\EFT\EscapeFromTarkov_Data\StreamingAssets\Windows\assets\content\`.
4. Search using your OS's file explorer's search function for the item you want, or navigate to it by selecting one of
   the appropriate folders. `Weapons/` contain all weapons found in the game that go pew pew, and `items/` contain all
   other items like attachments, food, water, ammo, and meds.
5. You have found your item, congratulations. For this example, we are using the `foregrip_all_bcm_mod_3`.

   ![found](images/explorer/EFT_bundle.png)

6. This `.bundle` file usually contains all assets required. This includes meshes, textures, and audio assets. You may
   need to perform this action multiple times for missing assets.
7. Open AssetStudioGUI.
8. Drag and drop your item's `.bundle` file into the main window, then select the `Asset List` tab at the top.

   ![list](images/AssetStudioGUI/list.png)

9. Its recommended to click on the `Type` column to sort by type.
10. Click on all files that are `LOD0` using `ctrl + click`. These are all of the high resolution textures and meshes.

    ![selected](images/AssetStudioGUI/selected.png)

11. Right-click, and press `Exported selected assets`. Select the folder you want them to be placed at.

All done.
