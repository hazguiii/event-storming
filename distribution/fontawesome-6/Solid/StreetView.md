# StreetView


```text
fontawesome-6/Solid/StreetView
```

```text
include('fontawesome-6/Solid/StreetView')
```



| Illustration | StreetView |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StreetView.png) | ![illustration for StreetView](../../fontawesome-6/Solid/StreetView.Local.png) |




## StreetView

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StreetView
include('fontawesome-6/Solid/StreetView')

' renders the element
StreetView('StreetView', 'Street View', 'an optional tech label')
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

' loads the Item which embeds the element StreetView
include('fontawesome-6/Solid/StreetView')

' renders the element
StreetView('StreetView', 'Street View', 'an optional tech label')
@enduml
```

