# RoadCircleXmark


```text
fontawesome-6/Solid/RoadCircleXmark
```

```text
include('fontawesome-6/Solid/RoadCircleXmark')
```



| Illustration | RoadCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RoadCircleXmark.png) | ![illustration for RoadCircleXmark](../../fontawesome-6/Solid/RoadCircleXmark.Local.png) |




## RoadCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RoadCircleXmark
include('fontawesome-6/Solid/RoadCircleXmark')

' renders the element
RoadCircleXmark('RoadCircleXmark', 'Road Circle Xmark', 'an optional tech label')
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

' loads the Item which embeds the element RoadCircleXmark
include('fontawesome-6/Solid/RoadCircleXmark')

' renders the element
RoadCircleXmark('RoadCircleXmark', 'Road Circle Xmark', 'an optional tech label')
@enduml
```

