# MarsDouble


```text
fontawesome-6/Solid/MarsDouble
```

```text
include('fontawesome-6/Solid/MarsDouble')
```



| Illustration | MarsDouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MarsDouble.png) | ![illustration for MarsDouble](../../fontawesome-6/Solid/MarsDouble.Local.png) |




## MarsDouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MarsDouble
include('fontawesome-6/Solid/MarsDouble')

' renders the element
MarsDouble('MarsDouble', 'Mars Double', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MarsDouble
include('fontawesome-6/Solid/MarsDouble')

' renders the element
MarsDouble('MarsDouble', 'Mars Double', 'an optional tech label')
@enduml
```

