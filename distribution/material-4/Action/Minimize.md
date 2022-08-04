# Minimize


```text
material-4/Action/Minimize
```

```text
include('material-4/Action/Minimize')
```



| Illustration | Minimize |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Minimize.png) | ![illustration for Minimize](../../material-4/Action/Minimize.Local.png) |




## Minimize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Minimize
include('material-4/Action/Minimize')

' renders the element
Minimize('Minimize', 'Minimize', 'an optional tech label')
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

' loads the Item which embeds the element Minimize
include('material-4/Action/Minimize')

' renders the element
Minimize('Minimize', 'Minimize', 'an optional tech label')
@enduml
```

