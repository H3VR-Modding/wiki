---
title: Using Pre-Attached Attachments
---

Pre-attached attachments allow for a myriad of different functions, and is used not just for modular weapons.

The script can be located
here: [`PreattachedAttachment` script](https://github.com/cityrobo/H3VR_Mods/blob/master/PreattachedAttachment/PreattachedAttachment.cs)
. Thanks to Cityrobo for providing this script.

## Setting the script up

1. Once you click on the link above, click the `Raw` button on the top right of the text window.
2. Once it opens the new page, hit `ctrl + s` on your keyboard, and save it somewhere safe.
3. Move script into your unity project (it should work anywhere as long as it's in the `Assets/` folder)
4. Open the script in a notepad program.
5. Edit the file so it resembles the below example. Notice that the only change is the addition of `//` to the
   line `attachment.AttachToMount(mount, false);`

    ```cs
    using UnityEngine;
    using FistVR;

    namespace Cityrobo
    {
        public class PreattachedAttachment : MonoBehaviour
        {
            public FVRFireArmAttachment attachment;
            public FVRFireArmAttachmentMount mount;

            public void Start()
            {
                //attachment.AttachToMount(mount, false);
            }
        }
    }
    ```

## Using it

There are a few things you need to make sure you have on your main prefab (your firearm):

- An attachment mount that it needs to go on
    - Make sure that this attachment mount is also listed in your main prefab's attachment list in it's main script
- The attachment directly on your main prefab as a child

After you have those done, simply add a new component (in the inspector window) to an empty game object. If you did it
right, it should show up like this:

![script](images/UnityEditor/scripts/pre-attached_attachment.png)

Fill in the mount and the attachment its attaching to by dragging and dropping them.

## Packing

As of writing this, you need to include the `.dll` file inside of your `.deli` file so that the gun functions. In the
future, the script will be included in [H3VRUtilities](https://h3vr.thunderstore.io/package/WFIOST/H3VRUtilities/) so
instead just add it's dependency string to your Thunderstore manifest.

This means that you need to:

1. Include this [`.dll` file](https://github.com/cityrobo/H3VR_Mods/blob/master/Releases/PreattachedAttachment.dll)
   inside of your `.deli` file.
2. In your Deli manifest, include an assembly reference in a setup stage. Below is an example.

    ```json
    {
        ...
        "assets" :{
            "setup": {
                "PreattachedAttachment.dll": "deli:assembly"
            }
        }
    }
    ```
