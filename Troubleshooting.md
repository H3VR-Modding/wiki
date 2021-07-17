# Troubleshooting

The #1 way to find what is causing issues in your mod loading is by checking the log. After using r2modman's setting option to `Browse Profile Folder`, navigate to the `BepInEx/LogOutput.log` file and open it in any notepad program.

## Null Reference Exception

A mod, Unity, or BepInEx may throw something that looks like this:

```log
[Error  :  Unity log] NullReferenceException: Object not set to an instance of an object
```

This is most likely a mod that is causing this issue, which could be creating lag or other unwanted effects. This does not cause mods to fail to load or for the game to crash.

## Bad Image Format Exception

Deli throws this error when it can't patch monomod. This is caused by a mod that is still trying to use Deli's patcher. Uninstall that mod and it will be fixed, and notify the author about this issue.

This error causes Deli to stop loading mods, and will not load anything once encountered.

Known offenders:

- Deli.H3VR (a different mod than Deli)

## Outdated mods

Since you already read Ebkr's document, you must have the correct mod versions right? If not, you can double check this list for whats needed for Deli 0.4.1+:

- BepInEx 5.4.0+
- Otherloader 0.3.0+
- Sideloader 0.3.7+
- HUtils 8.0.3+
- Hook Gen Patcher 1.2.0+

Please see the [Semantic Versioning](https://semver.org) website to understand what the different numbers mean for compatibility.
