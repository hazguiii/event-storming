# Aidungeon


```text
simpleicons-6/A/Aidungeon
```

```text
include('simpleicons-6/A/Aidungeon')
```



| Illustration | Aidungeon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aidungeon.png) | ![illustration for Aidungeon](../../simpleicons-6/A/Aidungeon.Local.png) |




## Aidungeon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aidungeon
include('simpleicons-6/A/Aidungeon')

' renders the element
Aidungeon('Aidungeon', 'Aidungeon', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aidungeon
include('simpleicons-6/A/Aidungeon')

' renders the element
Aidungeon('Aidungeon', 'Aidungeon', 'an optional tech label')
@enduml
```

