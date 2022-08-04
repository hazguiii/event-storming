# Hands


```text
fontawesome-6/Solid/Hands
```

```text
include('fontawesome-6/Solid/Hands')
```



| Illustration | Hands |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hands.png) | ![illustration for Hands](../../fontawesome-6/Solid/Hands.Local.png) |




## Hands

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hands
include('fontawesome-6/Solid/Hands')

' renders the element
Hands('Hands', 'Hands', 'an optional tech label')
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

' loads the Item which embeds the element Hands
include('fontawesome-6/Solid/Hands')

' renders the element
Hands('Hands', 'Hands', 'an optional tech label')
@enduml
```

