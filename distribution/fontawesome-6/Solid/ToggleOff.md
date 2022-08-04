# ToggleOff


```text
fontawesome-6/Solid/ToggleOff
```

```text
include('fontawesome-6/Solid/ToggleOff')
```



| Illustration | ToggleOff |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ToggleOff.png) | ![illustration for ToggleOff](../../fontawesome-6/Solid/ToggleOff.Local.png) |




## ToggleOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ToggleOff
include('fontawesome-6/Solid/ToggleOff')

' renders the element
ToggleOff('ToggleOff', 'Toggle Off', 'an optional tech label')
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

' loads the Item which embeds the element ToggleOff
include('fontawesome-6/Solid/ToggleOff')

' renders the element
ToggleOff('ToggleOff', 'Toggle Off', 'an optional tech label')
@enduml
```

