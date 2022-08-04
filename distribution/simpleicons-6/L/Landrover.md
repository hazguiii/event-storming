# Landrover


```text
simpleicons-6/L/Landrover
```

```text
include('simpleicons-6/L/Landrover')
```



| Illustration | Landrover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Landrover.png) | ![illustration for Landrover](../../simpleicons-6/L/Landrover.Local.png) |




## Landrover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Landrover
include('simpleicons-6/L/Landrover')

' renders the element
Landrover('Landrover', 'Landrover', 'an optional tech label')
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

' loads the Item which embeds the element Landrover
include('simpleicons-6/L/Landrover')

' renders the element
Landrover('Landrover', 'Landrover', 'an optional tech label')
@enduml
```

