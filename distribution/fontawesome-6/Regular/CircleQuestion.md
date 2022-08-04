# CircleQuestion


```text
fontawesome-6/Regular/CircleQuestion
```

```text
include('fontawesome-6/Regular/CircleQuestion')
```



| Illustration | CircleQuestion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CircleQuestion.png) | ![illustration for CircleQuestion](../../fontawesome-6/Regular/CircleQuestion.Local.png) |




## CircleQuestion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleQuestion
include('fontawesome-6/Regular/CircleQuestion')

' renders the element
CircleQuestion('CircleQuestion', 'Circle Question', 'an optional tech label')
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

' loads the Item which embeds the element CircleQuestion
include('fontawesome-6/Regular/CircleQuestion')

' renders the element
CircleQuestion('CircleQuestion', 'Circle Question', 'an optional tech label')
@enduml
```
