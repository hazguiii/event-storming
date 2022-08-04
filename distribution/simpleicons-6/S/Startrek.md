# Startrek


```text
simpleicons-6/S/Startrek
```

```text
include('simpleicons-6/S/Startrek')
```



| Illustration | Startrek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Startrek.png) | ![illustration for Startrek](../../simpleicons-6/S/Startrek.Local.png) |




## Startrek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Startrek
include('simpleicons-6/S/Startrek')

' renders the element
Startrek('Startrek', 'Startrek', 'an optional tech label')
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

' loads the Item which embeds the element Startrek
include('simpleicons-6/S/Startrek')

' renders the element
Startrek('Startrek', 'Startrek', 'an optional tech label')
@enduml
```

