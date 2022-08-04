# SolarPanel


```text
fontawesome-6/Solid/SolarPanel
```

```text
include('fontawesome-6/Solid/SolarPanel')
```



| Illustration | SolarPanel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SolarPanel.png) | ![illustration for SolarPanel](../../fontawesome-6/Solid/SolarPanel.Local.png) |




## SolarPanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SolarPanel
include('fontawesome-6/Solid/SolarPanel')

' renders the element
SolarPanel('SolarPanel', 'Solar Panel', 'an optional tech label')
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

' loads the Item which embeds the element SolarPanel
include('fontawesome-6/Solid/SolarPanel')

' renders the element
SolarPanel('SolarPanel', 'Solar Panel', 'an optional tech label')
@enduml
```

