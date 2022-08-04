# Opel


```text
simpleicons-6/O/Opel
```

```text
include('simpleicons-6/O/Opel')
```



| Illustration | Opel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opel.png) | ![illustration for Opel](../../simpleicons-6/O/Opel.Local.png) |




## Opel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opel
include('simpleicons-6/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label')
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

' loads the Item which embeds the element Opel
include('simpleicons-6/O/Opel')

' renders the element
Opel('Opel', 'Opel', 'an optional tech label')
@enduml
```

