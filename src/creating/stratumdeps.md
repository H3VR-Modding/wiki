---
title: Stratum GUIDs And Loaders
---

The standard project.yaml looks as follows:

```yaml
version: 1
dependencies:
  hard:
    h3vr.otherloader: 1.0.0
assets:
  runtime:
    sequential: true
    nested:
      - assets:
          - path: data/*
            plugin: h3vr.otherloader
            loader: item_data
      - assets:
          - path: late/*
            plugin: h3vr.otherloader
            loader: item_first_late
```

However, when it comes to making a stratum plugin, it can be difficult to remember which loaders, plugins, and
dependencies to use. This page details each one.

## OtherLoader

### h3vr.otherloader - 1.0.0

#### OtherLoader Tags

[OtherLoader Tags](https://github.com/devyndamonster/OtherLoader/wiki/Loader-Tags)

## PTNHBGML

### dll.potatoes.ptnhbgml - 1.4.3

#### PTNHBGML Tags

- tnhbankfile - References a .bank file for Take And Hold
