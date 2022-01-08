# Preload Assets Build Item
The preload assets is a feature of Sodalite which injects various types of objects into the game's resources. This can be used to add custom resources of the following types:
- FVRFireArmRoundDisplayData
- MuzzleEffectConfig
- TutorialBlock
- FVRObject
- ItemSpawnerID
- SosigEnemyTemplate
- PMaterialDefinition
- BallisticChart

> [!NOTE]
> Although you can inject resources like these into the game, they must abide by the vanilla game's limitations as they get ingested as its own. Notably, you may add custom FVRObjects and ItemSpawnerIDs, however you cannot add custom categories or subcategories and must make use of ones part of the vanilla game.


## Creation
`Create > MeatKit > Build Items > Preload Assets`

## Parameters
| Name        | Description                                                            |
|-------------|------------------------------------------------------------------------|
| Items       | The list of assets which will be preloaded and injected into the game. |