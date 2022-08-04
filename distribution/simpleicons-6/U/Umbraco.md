# Umbraco


```text
simpleicons-6/U/Umbraco
```

```text
include('simpleicons-6/U/Umbraco')
```



| Illustration | Umbraco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Umbraco.png) | ![illustration for Umbraco](../../simpleicons-6/U/Umbraco.Local.png) |




## Umbraco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Umbraco
include('simpleicons-6/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
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

' loads the Item which embeds the element Umbraco
include('simpleicons-6/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label')
@enduml
```

