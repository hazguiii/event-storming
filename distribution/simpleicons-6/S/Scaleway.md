# Scaleway


```text
simpleicons-6/S/Scaleway
```

```text
include('simpleicons-6/S/Scaleway')
```



| Illustration | Scaleway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Scaleway.png) | ![illustration for Scaleway](../../simpleicons-6/S/Scaleway.Local.png) |




## Scaleway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Scaleway
include('simpleicons-6/S/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label')
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

' loads the Item which embeds the element Scaleway
include('simpleicons-6/S/Scaleway')

' renders the element
Scaleway('Scaleway', 'Scaleway', 'an optional tech label')
@enduml
```

