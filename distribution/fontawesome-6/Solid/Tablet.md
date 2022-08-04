# Tablet


```text
fontawesome-6/Solid/Tablet
```

```text
include('fontawesome-6/Solid/Tablet')
```



| Illustration | Tablet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Tablet.png) | ![illustration for Tablet](../../fontawesome-6/Solid/Tablet.Local.png) |




## Tablet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Tablet
include('fontawesome-6/Solid/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label')
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

' loads the Item which embeds the element Tablet
include('fontawesome-6/Solid/Tablet')

' renders the element
Tablet('Tablet', 'Tablet', 'an optional tech label')
@enduml
```

