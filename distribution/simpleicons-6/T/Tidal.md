# Tidal


```text
simpleicons-6/T/Tidal
```

```text
include('simpleicons-6/T/Tidal')
```



| Illustration | Tidal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tidal.png) | ![illustration for Tidal](../../simpleicons-6/T/Tidal.Local.png) |




## Tidal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tidal
include('simpleicons-6/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label')
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

' loads the Item which embeds the element Tidal
include('simpleicons-6/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label')
@enduml
```

