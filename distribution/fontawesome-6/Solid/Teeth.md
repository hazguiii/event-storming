# Teeth


```text
fontawesome-6/Solid/Teeth
```

```text
include('fontawesome-6/Solid/Teeth')
```



| Illustration | Teeth |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Teeth.png) | ![illustration for Teeth](../../fontawesome-6/Solid/Teeth.Local.png) |




## Teeth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Teeth
include('fontawesome-6/Solid/Teeth')

' renders the element
Teeth('Teeth', 'Teeth', 'an optional tech label')
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

' loads the Item which embeds the element Teeth
include('fontawesome-6/Solid/Teeth')

' renders the element
Teeth('Teeth', 'Teeth', 'an optional tech label')
@enduml
```

