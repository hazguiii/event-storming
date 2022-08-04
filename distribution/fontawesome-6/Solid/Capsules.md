# Capsules


```text
fontawesome-6/Solid/Capsules
```

```text
include('fontawesome-6/Solid/Capsules')
```



| Illustration | Capsules |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Capsules.png) | ![illustration for Capsules](../../fontawesome-6/Solid/Capsules.Local.png) |




## Capsules

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Capsules
include('fontawesome-6/Solid/Capsules')

' renders the element
Capsules('Capsules', 'Capsules', 'an optional tech label')
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

' loads the Item which embeds the element Capsules
include('fontawesome-6/Solid/Capsules')

' renders the element
Capsules('Capsules', 'Capsules', 'an optional tech label')
@enduml
```

