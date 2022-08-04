# Stadia


```text
simpleicons-6/S/Stadia
```

```text
include('simpleicons-6/S/Stadia')
```



| Illustration | Stadia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Stadia.png) | ![illustration for Stadia](../../simpleicons-6/S/Stadia.Local.png) |




## Stadia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Stadia
include('simpleicons-6/S/Stadia')

' renders the element
Stadia('Stadia', 'Stadia', 'an optional tech label')
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

' loads the Item which embeds the element Stadia
include('simpleicons-6/S/Stadia')

' renders the element
Stadia('Stadia', 'Stadia', 'an optional tech label')
@enduml
```

