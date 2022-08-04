# Readthedocs


```text
simpleicons-6/R/Readthedocs
```

```text
include('simpleicons-6/R/Readthedocs')
```



| Illustration | Readthedocs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Readthedocs.png) | ![illustration for Readthedocs](../../simpleicons-6/R/Readthedocs.Local.png) |




## Readthedocs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Readthedocs
include('simpleicons-6/R/Readthedocs')

' renders the element
Readthedocs('Readthedocs', 'Readthedocs', 'an optional tech label')
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

' loads the Item which embeds the element Readthedocs
include('simpleicons-6/R/Readthedocs')

' renders the element
Readthedocs('Readthedocs', 'Readthedocs', 'an optional tech label')
@enduml
```

