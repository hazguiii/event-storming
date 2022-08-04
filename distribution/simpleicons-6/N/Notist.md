# Notist


```text
simpleicons-6/N/Notist
```

```text
include('simpleicons-6/N/Notist')
```



| Illustration | Notist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Notist.png) | ![illustration for Notist](../../simpleicons-6/N/Notist.Local.png) |




## Notist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Notist
include('simpleicons-6/N/Notist')

' renders the element
Notist('Notist', 'Notist', 'an optional tech label')
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

' loads the Item which embeds the element Notist
include('simpleicons-6/N/Notist')

' renders the element
Notist('Notist', 'Notist', 'an optional tech label')
@enduml
```

