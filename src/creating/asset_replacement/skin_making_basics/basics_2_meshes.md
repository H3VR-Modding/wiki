---
title: Skin Making Basics 2 - Meshes and Textures
---

> [!NOTE]
> Select guns are pre-packaged and ready to be made into skins thanks to yours truly. You can totally skip these parts if your gun is in these packs! Hundreds of gun canvases to choose from, look down below in the ['Extras'](extras.md) tab for "Skinmaker Skips".

Once we have our tools, it is time to use them.

**1) Open up your H3VR File Location.** This can be done on the Steam App, where you find H3VR in your library, select "
properties", then hitting the option "Open File Directory"

Alternatively, you can search within your computer: PC --> Drive --> ProgramFiles (x86) --> steam --> steamapps -->
common --> H3VR

**2) Locate and Duplicate your "StreamingAssets".**

You can find these files as you progress through the folders:

H3VR --> h3vr_data --> StreamingAssets

Asset files that you'll be using will be found here.

Examples being Assets_Weaponry_ObjectIDs_(NAME) [Name being "Rifle", "SMG", "Support", and so on]

NOTE - i highly recommend making a copy of these asset files, and pasting them in a dedicated Skinmaking Folder

Open UABE

File --> Open

Locate these asset files (If you made a copy, find the copy in your skinmaking folder instead of the one in
StreamingAssets)

Select which one you think the desired gun/ammo/item you want to skin will be

Once you select the asset file, UABE will request to unpack it, select "yes"

It will ask you to make a new file

Don't replace the old StreamingAssets file, make a new file with 'U' or 'Unpack' inside of it to make it different from
the others.

This will duplicate that asset file in a way that UABE can view and extract it.

**3) Locating Mesh and Textures within the unpacked asset file**

[Video Tutorial made by Moorus](https://www.youtube.com/watch?v=_vkgVzBYYQY)

After step 2, the assets will be ready to view and extract.

Select "Info" with the unpacked file selected

A page will pop up with a lot of random information!

Up above, there are ways to sort this madness!

I recommend this, click on "Name", then "Container", then "Type"

Now, the madness should be much easier to read!

(I recommend making a folder in your dedicated Skinmaking folder. Call it by the item's name, then make three folders
inside that - Tex, Mesh, and Workshop)

Lets get started with finding the Textures.

They fall under the type, "2DTextures"

Once you find the type, look through the Containers for the item you are looking for.

When you find the container, you will need three primary maps -- Base Color, Alloy, and Normal

If you are having difficulty finding these files:

Look into the "magazine" container for your item as they can be found there sometimes If you are seeing more than three
textures under your desired item's container, download those as well When you find these textures, select all of them,
then hit "Export" off to the left of the window.

Save as "PNGs"

Put them somewhere where you can find them. (If you made the dedicated folder, Tex would be the place to put them)

Now, time to find those Meshes.

They fall under the type, "Mesh"

Not "MeshRenderer", not "MeshFilter", "Mesh".

Same as you did for the Textures, once you are within the type, locate the container.

Once you find the container, locate all the parts connected to said container.

Select all of them.

Export as a Blender compatible file, such as DAE or OBJ (OBJ recommended, see extras for a 'multiple obj export' tool
for Blender)

Save in a location close to those Texture files (If you have that dedicated folder, these would be placed in Mesh)

> [!NOTE]
> If your item uses a magazine, check under the 'magazine' containers for any additional meshes belonging to your item.

Next up, [Step 3 - Blender](basics_3_blender.md).
