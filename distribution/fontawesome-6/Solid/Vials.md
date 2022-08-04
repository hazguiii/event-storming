# Vials


```text
fontawesome-6/Solid/Vials
```

```text
include('fontawesome-6/Solid/Vials')
```



| Illustration | Vials |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Vials.png) | ![illustration for Vials](../../fontawesome-6/Solid/Vials.Local.png) |




## Vials

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vials
include('fontawesome-6/Solid/Vials')

' renders the element
Vials('Vials', 'Vials', 'an optional tech label')
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

' loads the Item which embeds the element Vials
include('fontawesome-6/Solid/Vials')

' renders the element
Vials('Vials', 'Vials', 'an optional tech label')
@enduml
```

