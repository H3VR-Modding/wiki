---
title: The BepInEx Log
---

The BepInEx log is a list of messages that describe what mods loaded, what mods are talking about, and any errors occurred.  
With purely BepInEx, the log can be read from two sources:  the console window that appears after running the game, and a file saved. Both are updated as logging occurs.  
Mods can extend the logging system to provide more ways to read it, such as [Sodalite](https://h3vr.thunderstore.io/package/nrgill28/Sodalite/)'s in-game log panel.

## Opening It Yourself

Opening it yourself is a good first-step for troubleshooting purposes.

1. Open r2modman and go to the `Settings` section. Open your profile folder by clicking the following button:

    ![image](images/r2modman/settings/browse_profile_folder.png)

2. This button should have opened a folder. Inside this folder you will see the following files:

    ```text
    [Current profile name]/
        BepInEx/
        mods.yml
        ...
    ```

3. Open the folder named `BepInEx`
4. Open `LogOutput.log`. You can use any text editor, but Notepad is ill-advised.

Search for any `Error` or `Warning` messages. Most warnings from `HarmonyX` can be ignored.

## Sharing It Over Discord

Sharing it over Discord is the main way to get help, and makes the people who answer you not hate you as much. Including the log in your problem message helps more than you might think.

1. Go to the `Settings` section of r2modman
2. Search for "log", and click on the 1 item in the list. This button copies the text to your clipboard.

   ![copy](images/r2modman/settings/copy_LogOutput.png)

3. Paste (either by using `ctrl + v` or by right clicking and clicking paste) into the channel you are sharing the log to.
4. A message will appear asking you to upload a file instead. Click upload.

    ![upload](images/Discord/large_message.png)
