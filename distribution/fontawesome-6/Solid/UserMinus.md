# UserMinus


```text
fontawesome-6/Solid/UserMinus
```

```text
include('fontawesome-6/Solid/UserMinus')
```



| Illustration | UserMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserMinus.png) | ![illustration for UserMinus](../../fontawesome-6/Solid/UserMinus.Local.png) |




## UserMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserMinus
include('fontawesome-6/Solid/UserMinus')

' renders the element
UserMinus('UserMinus', 'User Minus', 'an optional tech label')
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

' loads the Item which embeds the element UserMinus
include('fontawesome-6/Solid/UserMinus')

' renders the element
UserMinus('UserMinus', 'User Minus', 'an optional tech label')
@enduml
```

