# CircleRight


```text
fontawesome-6/Solid/CircleRight
```

```text
include('fontawesome-6/Solid/CircleRight')
```



| Illustration | CircleRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleRight.png) | ![illustration for CircleRight](../../fontawesome-6/Solid/CircleRight.Local.png) |




## CircleRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleRight
include('fontawesome-6/Solid/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label')
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

' loads the Item which embeds the element CircleRight
include('fontawesome-6/Solid/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label')
@enduml
```

