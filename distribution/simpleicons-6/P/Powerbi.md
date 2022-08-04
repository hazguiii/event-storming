# Powerbi


```text
simpleicons-6/P/Powerbi
```

```text
include('simpleicons-6/P/Powerbi')
```



| Illustration | Powerbi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Powerbi.png) | ![illustration for Powerbi](../../simpleicons-6/P/Powerbi.Local.png) |




## Powerbi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Powerbi
include('simpleicons-6/P/Powerbi')

' renders the element
Powerbi('Powerbi', 'Powerbi', 'an optional tech label')
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

' loads the Item which embeds the element Powerbi
include('simpleicons-6/P/Powerbi')

' renders the element
Powerbi('Powerbi', 'Powerbi', 'an optional tech label')
@enduml
```

