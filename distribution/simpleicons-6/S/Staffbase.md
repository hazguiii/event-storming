# Staffbase


```text
simpleicons-6/S/Staffbase
```

```text
include('simpleicons-6/S/Staffbase')
```



| Illustration | Staffbase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Staffbase.png) | ![illustration for Staffbase](../../simpleicons-6/S/Staffbase.Local.png) |




## Staffbase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Staffbase
include('simpleicons-6/S/Staffbase')

' renders the element
Staffbase('Staffbase', 'Staffbase', 'an optional tech label')
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

' loads the Item which embeds the element Staffbase
include('simpleicons-6/S/Staffbase')

' renders the element
Staffbase('Staffbase', 'Staffbase', 'an optional tech label')
@enduml
```

