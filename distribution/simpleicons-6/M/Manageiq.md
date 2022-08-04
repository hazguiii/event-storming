# Manageiq


```text
simpleicons-6/M/Manageiq
```

```text
include('simpleicons-6/M/Manageiq')
```



| Illustration | Manageiq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Manageiq.png) | ![illustration for Manageiq](../../simpleicons-6/M/Manageiq.Local.png) |




## Manageiq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Manageiq
include('simpleicons-6/M/Manageiq')

' renders the element
Manageiq('Manageiq', 'Manageiq', 'an optional tech label')
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

' loads the Item which embeds the element Manageiq
include('simpleicons-6/M/Manageiq')

' renders the element
Manageiq('Manageiq', 'Manageiq', 'an optional tech label')
@enduml
```

