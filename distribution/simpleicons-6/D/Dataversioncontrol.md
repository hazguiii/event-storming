# Dataversioncontrol


```text
simpleicons-6/D/Dataversioncontrol
```

```text
include('simpleicons-6/D/Dataversioncontrol')
```



| Illustration | Dataversioncontrol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dataversioncontrol.png) | ![illustration for Dataversioncontrol](../../simpleicons-6/D/Dataversioncontrol.Local.png) |




## Dataversioncontrol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dataversioncontrol
include('simpleicons-6/D/Dataversioncontrol')

' renders the element
Dataversioncontrol('Dataversioncontrol', 'Dataversioncontrol', 'an optional tech label')
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

' loads the Item which embeds the element Dataversioncontrol
include('simpleicons-6/D/Dataversioncontrol')

' renders the element
Dataversioncontrol('Dataversioncontrol', 'Dataversioncontrol', 'an optional tech label')
@enduml
```

