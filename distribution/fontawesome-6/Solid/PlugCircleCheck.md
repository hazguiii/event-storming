# PlugCircleCheck


```text
fontawesome-6/Solid/PlugCircleCheck
```

```text
include('fontawesome-6/Solid/PlugCircleCheck')
```



| Illustration | PlugCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlugCircleCheck.png) | ![illustration for PlugCircleCheck](../../fontawesome-6/Solid/PlugCircleCheck.Local.png) |




## PlugCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleCheck
include('fontawesome-6/Solid/PlugCircleCheck')

' renders the element
PlugCircleCheck('PlugCircleCheck', 'Plug Circle Check', 'an optional tech label')
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

' loads the Item which embeds the element PlugCircleCheck
include('fontawesome-6/Solid/PlugCircleCheck')

' renders the element
PlugCircleCheck('PlugCircleCheck', 'Plug Circle Check', 'an optional tech label')
@enduml
```

