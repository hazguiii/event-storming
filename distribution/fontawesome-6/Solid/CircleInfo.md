# CircleInfo


```text
fontawesome-6/Solid/CircleInfo
```

```text
include('fontawesome-6/Solid/CircleInfo')
```



| Illustration | CircleInfo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleInfo.png) | ![illustration for CircleInfo](../../fontawesome-6/Solid/CircleInfo.Local.png) |




## CircleInfo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleInfo
include('fontawesome-6/Solid/CircleInfo')

' renders the element
CircleInfo('CircleInfo', 'Circle Info', 'an optional tech label')
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

' loads the Item which embeds the element CircleInfo
include('fontawesome-6/Solid/CircleInfo')

' renders the element
CircleInfo('CircleInfo', 'Circle Info', 'an optional tech label')
@enduml
```

