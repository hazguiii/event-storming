# Songoda


```text
simpleicons-6/S/Songoda
```

```text
include('simpleicons-6/S/Songoda')
```



| Illustration | Songoda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Songoda.png) | ![illustration for Songoda](../../simpleicons-6/S/Songoda.Local.png) |




## Songoda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Songoda
include('simpleicons-6/S/Songoda')

' renders the element
Songoda('Songoda', 'Songoda', 'an optional tech label')
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

' loads the Item which embeds the element Songoda
include('simpleicons-6/S/Songoda')

' renders the element
Songoda('Songoda', 'Songoda', 'an optional tech label')
@enduml
```

