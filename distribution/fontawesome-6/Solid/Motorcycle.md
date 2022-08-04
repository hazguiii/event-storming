# Motorcycle


```text
fontawesome-6/Solid/Motorcycle
```

```text
include('fontawesome-6/Solid/Motorcycle')
```



| Illustration | Motorcycle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Motorcycle.png) | ![illustration for Motorcycle](../../fontawesome-6/Solid/Motorcycle.Local.png) |




## Motorcycle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Motorcycle
include('fontawesome-6/Solid/Motorcycle')

' renders the element
Motorcycle('Motorcycle', 'Motorcycle', 'an optional tech label')
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

' loads the Item which embeds the element Motorcycle
include('fontawesome-6/Solid/Motorcycle')

' renders the element
Motorcycle('Motorcycle', 'Motorcycle', 'an optional tech label')
@enduml
```

