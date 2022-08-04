# DrumSteelpan


```text
fontawesome-6/Solid/DrumSteelpan
```

```text
include('fontawesome-6/Solid/DrumSteelpan')
```



| Illustration | DrumSteelpan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DrumSteelpan.png) | ![illustration for DrumSteelpan](../../fontawesome-6/Solid/DrumSteelpan.Local.png) |




## DrumSteelpan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DrumSteelpan
include('fontawesome-6/Solid/DrumSteelpan')

' renders the element
DrumSteelpan('DrumSteelpan', 'Drum Steelpan', 'an optional tech label')
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

' loads the Item which embeds the element DrumSteelpan
include('fontawesome-6/Solid/DrumSteelpan')

' renders the element
DrumSteelpan('DrumSteelpan', 'Drum Steelpan', 'an optional tech label')
@enduml
```

