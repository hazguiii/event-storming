# Moleculer


```text
simpleicons-6/M/Moleculer
```

```text
include('simpleicons-6/M/Moleculer')
```



| Illustration | Moleculer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Moleculer.png) | ![illustration for Moleculer](../../simpleicons-6/M/Moleculer.Local.png) |




## Moleculer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Moleculer
include('simpleicons-6/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label')
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

' loads the Item which embeds the element Moleculer
include('simpleicons-6/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label')
@enduml
```

