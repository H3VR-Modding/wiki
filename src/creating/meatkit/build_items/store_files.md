# Store Files Build Item
The store files build item is the simplest build item of them all. All it does is accept a list of assets and compiles those assets into an asset bundle for later manual use.

## Creation
`Create > MeatKit > Build Items > Store Files`

## Parameters
| Name        | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| Bundle Name | The name of the bundle file after exporting. This will be forced lowercase if it isn't already. |
| Items       | The list of objects to be included in the asset bundle.                                         |