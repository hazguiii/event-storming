# Bolt


```text
material-4/Content/Bolt
```

```text
include('material-4/Content/Bolt')
```



| Illustration | Bolt |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Bolt.png) | ![illustration for Bolt](../../material-4/Content/Bolt.Local.png) |




## Bolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Bolt
include('material-4/Content/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Bolt
include('material-4/Content/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label')
@enduml
```

