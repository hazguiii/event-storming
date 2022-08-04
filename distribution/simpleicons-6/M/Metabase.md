# Metabase


```text
simpleicons-6/M/Metabase
```

```text
include('simpleicons-6/M/Metabase')
```



| Illustration | Metabase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Metabase.png) | ![illustration for Metabase](../../simpleicons-6/M/Metabase.Local.png) |




## Metabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Metabase
include('simpleicons-6/M/Metabase')

' renders the element
Metabase('Metabase', 'Metabase', 'an optional tech label')
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

' loads the Item which embeds the element Metabase
include('simpleicons-6/M/Metabase')

' renders the element
Metabase('Metabase', 'Metabase', 'an optional tech label')
@enduml
```

