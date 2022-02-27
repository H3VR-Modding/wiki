# Atlas Basics
Because Atlas uses Unity for mapping directly, if you are already familiar with the general Unity workflow there will be no surprised here. If you aren't, this guide will explain enough to allow you to start making your own simple environments.

## Scene essentials
First off, we will need an empty scene to work with, so in Unity to to `File > New Scene`.
This will open a new empty scene up, and from here you will want to remove the camera object
from the scene and add a new empty game object which we will rename to `Scene Manager` (right
click the scene panel on the left and select 'Create Empty').

On your newly created scene manager object, go ahead and add the `Scene Settings Override`
component, this component contains a large number of settings for how the scene plays when
in-game. There is no need to change any of the values from their defaults.

Another required component for the scene manager object is the `FVR Reverb System`. This handles
some reverb environments in the scene, which we will also need. After adding the reverb system
component to your scene manager, make another new empty game object and set its position to 0,5,0
and scale to 10,10,10. Add the `FVR Reverb Environment` to this game object and change the environment
to something other than 'None'. Different reverb environments will apply different audio effects to
sounds that play inside them. After doing this, go back to the reverb system component on the scene
manager object and assign this default reverb environment object to the 'Default Environment' field,
as well as adding it to the 'Environments' list.

Next, make another empty game object and call it `Player Spawn`. This will act as our player
spawn and reset points for the scene. On this game object, add the `Player Spawn Point` and
`Player Reset Point` components. Double check that this game object is positioned at 0,0,0.

Of course, we will need somewhere for the player to stand as well. Create a cube (Right click
in scene panel and select `3D Object > Cube`) and set the scale to X:10, Y:1, Z:10 and its
position to X:0, Y:-0.5, Z:0. You must also set the layer of this game object to be `Environment`,
as well as set the object to be static. It is important that you set the layer and static of all
environment objects as otherwise the player will be able to phase through the objects.

Lastly, for something to interact with in the scene, make a new empty game object and add the
`Prefab Spawn Point` component to it. By default this will cause an item spawner to be placed
at the shown location when your scene is loaded. You can also use this component for a few other
static props such as the destructobin.

Save your scene to a new empty folder in your project and continue to the next section.

## Testing
With all of that setup, you are now good to start testing your scene. For this, you will need a
MeatKit build profile with your scene as a build item. For more information about the MeatKit build
pipeline, see the [MeatKit documentation](../../../meatkit/intro.md).

Locate the existing build profile in `Packages/Atlas/Sample` and make a copy of it by selecting it
and hitting `Ctrl+D`. You will likely want to move this copied file to its own folder. Then, right
click in the project window and select `Create > MeatKit > Build Item > Atlas Scene`. In the Atlas
Scene Build Item, drag and drop your saved scene file into the 'Scene File' field at the top of it.
Fill out the scene name, author, and description fields as you'd like, and for mode type `sandbox`.
A thumbnail is not required at this point, but if you have one you may insert it here too. 

Select your build profile again and this time open the dropdown for build items under the export
options header. Replace the existing sample sandbox build item with your newly created atlas scene
build item. At this point, you may also change the Thunderstore metadata fields in the build profile
to customize your mod further.

When you're ready to test your scene go ahead and refocus the MeatKit build window. Make sure that
the build action is set to 'Copy To Profile' and that you have a valid profile folder selected. Then
click the build button at the bottom. For a smaller scene this will likely not take longer than a minute.

Once finished you can open r2mm to the profile you selected in the build window and launch H3VR modded.
Your scene should appear behind where you spawn in the main menu and if no thumbnail was assigned will
just be completely white. Select it as usual and load up the scene to give it a try.

## Troubleshooting
If something doesn't seem to be working, here's a list of common mistakes and their solutions:
* **Falling through the floor when loading the scene**:  
  You didn't set the floor cube to the environment layer.
* **When shooting, the gun doesn't cycle**:  
  You didn't correctly setup the reverb environment system / default.

## Next Steps
If everything works, you're good to move on to the next part; (WIP)
