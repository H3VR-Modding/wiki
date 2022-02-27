# Spawning Sosigs
Atlas provides a script that makes spawning single Sosigs in your map without code trivial.
To access it, add the `Sosig Spawn Point` script to an empty game object.

## Fields
| Field name     | Description                                                                                                                                              |
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Spawn On Start | If checked, a Sosig will spawn immediately when your scene loads or this game object becomes active for the first time.                                  |
| Sosig Type     | The type of Sosig to spawn. Each template comes with their own accessories and weapons.                                                                  |
| IFF            | The 'team' that this Sosig will spawn with. Sosigs on the same IFF will not attach each other, and will attack anything that is on a different IFF.      |
| Spawn Active   | If checked, the spawned Sosig will be active immediately when spawned. Leaving this unchecked the Sosig will not do anything until activated externally. |
| Spawn State    | The state this Sosig will spawn in. Disabled is similar to not being activated, the other states can be used to tune the initial behaviour of the Sosig. |
