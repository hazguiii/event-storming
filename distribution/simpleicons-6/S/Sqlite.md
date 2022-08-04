# Sqlite


```text
simpleicons-6/S/Sqlite
```

```text
include('simpleicons-6/S/Sqlite')
```



| Illustration | Sqlite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sqlite.png) | ![illustration for Sqlite](../../simpleicons-6/S/Sqlite.Local.png) |




## Sqlite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sqlite
include('simpleicons-6/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label')
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

' loads the Item which embeds the element Sqlite
include('simpleicons-6/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label')
@enduml
```

