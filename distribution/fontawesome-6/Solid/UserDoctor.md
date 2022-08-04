# UserDoctor


```text
fontawesome-6/Solid/UserDoctor
```

```text
include('fontawesome-6/Solid/UserDoctor')
```



| Illustration | UserDoctor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserDoctor.png) | ![illustration for UserDoctor](../../fontawesome-6/Solid/UserDoctor.Local.png) |




## UserDoctor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserDoctor
include('fontawesome-6/Solid/UserDoctor')

' renders the element
UserDoctor('UserDoctor', 'User Doctor', 'an optional tech label')
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

' loads the Item which embeds the element UserDoctor
include('fontawesome-6/Solid/UserDoctor')

' renders the element
UserDoctor('UserDoctor', 'User Doctor', 'an optional tech label')
@enduml
```

