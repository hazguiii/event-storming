# AngleUp


```text
fontawesome-6/Solid/AngleUp
```

```text
include('fontawesome-6/Solid/AngleUp')
```



| Illustration | AngleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AngleUp.png) | ![illustration for AngleUp](../../fontawesome-6/Solid/AngleUp.Local.png) |




## AngleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AngleUp
include('fontawesome-6/Solid/AngleUp')

' renders the element
AngleUp('AngleUp', 'Angle Up', 'an optional tech label')
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

' loads the Item which embeds the element AngleUp
include('fontawesome-6/Solid/AngleUp')

' renders the element
AngleUp('AngleUp', 'Angle Up', 'an optional tech label')
@enduml
```

