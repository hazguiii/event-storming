# Seagate


```text
simpleicons-6/S/Seagate
```

```text
include('simpleicons-6/S/Seagate')
```



| Illustration | Seagate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Seagate.png) | ![illustration for Seagate](../../simpleicons-6/S/Seagate.Local.png) |




## Seagate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Seagate
include('simpleicons-6/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label')
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

' loads the Item which embeds the element Seagate
include('simpleicons-6/S/Seagate')

' renders the element
Seagate('Seagate', 'Seagate', 'an optional tech label')
@enduml
```

