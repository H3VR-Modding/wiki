---
title: Making Modpacks
---

Got a list a mods you would like to share with the community? Take a look at the steps below for information on creating
a mod pack.

## Recommended software

It is recommended to use [Visual Studio Code](https://code.visualstudio.com) if your modpack has a large amount of mods.
This program is simply a fancy text editor, and will help with multi-line editing of text. If you have an alternative,
or would like to avoid it then that is completely fine.

## What is a mod pack?

A mod pack is simply a list of mods that [r2modman](https://h3vr.thunderstore.io/package/ebkr/r2modman/)
or [Thunderstore mod manager](https://www.overwolf.com/app/Thunderstore-Thunderstore_Mod_Manager) use to install all
listed mods at once, making it very convenient.

This means that it is just a regular mod you would upload, and can include it's own custom content.

The [creating](creating.md) and [uploading](uploading.md) pages are for other mods, so this one will be modpack
specific.

## Getting your list ready

> [!NOTE]
> The term "string" is used to describe a length of text, and is used in programming. More information [here](https://www.tutorialspoint.com/computer_programming/computer_programming_strings.htm), although it is not required for this guide.

Have the perfect mod list ready to go in r2mm or tsmm? Great!

1. In r2mm/tsmm, select the profile you would like to reference your modpack on.
2. Click on the "Settings" button on the left.
3. Change from the "All" tab to the "Modpacks" tab.
4. Click on the "Show dependency strings" button. This will open a list of strings that we will use for creating the
   list.
5. Copy the strings and paste them into a text file so you don't lose them.

If your profile has no mods installed in it, the list will be empty. If you still want to make a modpack but don't have
this:

1. Open a text file and [Thunderstore](https://h3vr.thunderstore.io).
2. Open the mod page of a mod you would like to include in your mod pack.
3. Just under the title and short description, there are a few fields that describe the last update and total downloads,
   etc. Below these are something called a "Dependency string". Copy the entire thing and paste it inside of your file.
4. Repeat for all mods you wish to include, pasting each string on a new line.

---

Now that you have a file with a list of each dependency string inside of it, we are going to format it so that it will
be easier to copy and paste it in the next step.

These steps assume that you are using a multi-line editor like [VSCode](https://code.visualstudio.com). Here is
a [reference site](https://tahoeninjas.blog/2019/03/30/multi-cursor-editing-in-visual-studio-code/) for shortcuts.

Before example:

```text
BepInEx-BepInExPack_H3VR-5.4.1101
BepInEx-MonoMod_Loader-1.0.0
nrgill28-HookGenPatcher_H3VR-1.2.3
nrgill28-Sodalite-1.0.0
```

1. Select the leftmost point in every line (before any text).
2. Add a `"` to it.
3. Select the rightmost point in every line (after any text).
4. Add a `"` to it.
5. Select the rightmost point in every line except for the last (after any text).
6. Add a `,` to it.

After example:

```text
"BepInEx-BepInExPack_H3VR-5.4.1101",
"BepInEx-MonoMod_Loader-1.0.0",
"nrgill28-HookGenPatcher_H3VR-1.2.3",
"nrgill28-Sodalite-1.0.0"
```

Leave this file aside for now.

## Making the manifest

A manifest is what tells the website the information about your mod. Go ahead and copy the example below into a new file
called `manifest.json` (case sensitive).

```json
{
  "name": "TestMod",
  "version_number": "1.1.0",
  "website_url": "https://github.com/thunderstore-io",
  "description": "This is a description for a mod. 250 characters max",
  "dependencies": [
    "MythicManiac-TestMod-1.1.0"
  ]
}
```

You can find specific information about this file on
the [old upload page](https://h3vr.thunderstore.io/package/create/docs/), but we will go over what you need to change.

1. Give your modpack a name.
    1. Do this by changing the `"name"` field, making sure to keep it inside the quotes.
    2. This is the only unique identifier of your mod! If you change it, you will instead upload another mod!
2. Change the version number to something normal, like `"1.0.0"`.
    1. You can find information about what these numbers mean on the [official document](https://semver.org).
3. The website url can be blank, so you can change the `"https://github.com/thunderstore-io"` to `""`.
4. The description shown is what is displayed on the main page, and is the main selling point of your pack. Keep this
   shorter than 250 characters.
5. Delete the `"MythicManiac-TestMod-1.1.0"` in the dependencies section, and replace it with the list of dependency
   strings that we made in the previous step.

Here is an example of a finished manifest:

```json
{
  "name": "Cool guys only",
  "version_number": "1.0.0",
  "website_url": "",
  "description": "The coolest modpack, yo.",
  "dependencies": [
    "BepInEx-BepInExPack_H3VR-5.4.1101",
    "BepInEx-MonoMod_Loader-1.0.0",
    "nrgill28-HookGenPatcher_H3VR-1.2.3",
    "nrgill28-Sodalite-1.0.0"
  ]
}
```

## An icon, and a readme

There are two other files required before you upload:

1. An icon named `icon.png` (case sensitive), 256x256. This is non-negotiable.
2. A file called `README.md` (case sensitive). This is displayed on the main page of your pack.
    1. The `.md` extension stands for markdown, and is essentially a fancy text file. You can just write out whatever
       you want in here.

Here is an example of the `README.md` file:

```md
# This is the coolest title

Some example text.

## But then this one is smaller

With some other text.

- A bulleted list
- With some cool text

1. A numbered list
2. With some other cool text

## A changelog is nice

### v1.0.1

This is cool too

### v1.0.0

This is cool
```

Thunderstore even has [a page to test it live](https://h3vr.thunderstore.io/tools/markdown-preview/)!

## Configs

If you would like to include your modified configs:

1. In r2mm/tsmm, click on "Settings" on the left.
2. Click on "Browse profile folder" (should be the second option in the list).
3. In the file explorer that opened, open the `BepInEx/` folder.
4. Make note of the `config/` folder, and when told in the next step to zip your files, include the entire folder inside
   of the zip.

This will look like this instead of the other example given.

```text
Mockpackname.zip/
    config/
        ...
    icon.png
    manifest.json
    README.md
```

## Uploading your mod

After you are done making the required files:

- `manifest.json`
- `icon.png`
- `README.md`

You can zip them up (select all, right click, send to, compressed zip) and head on over to
the [upload page](https://h3vr.thunderstore.io/package/create/) to upload your mod.

Here is what it should look like:

```text
Mockpackname.zip/
    icon.png
    manifest.json
    README.md
```

Make sure that you are logged in, select your team, and select "Modpacks" as your category.

Click submit, and if there were no errors, your pack should be uploaded.

If you did get an error, you can use [this page](https://h3vr.thunderstore.io/tools/manifest-v1-validator/) to test your
manifest.

If it says the manifest is fine, then you are missing a file, or your icon is incorrect.
