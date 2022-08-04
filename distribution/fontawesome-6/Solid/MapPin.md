# MapPin


```text
fontawesome-6/Solid/MapPin
```

```text
include('fontawesome-6/Solid/MapPin')
```



| Illustration | MapPin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MapPin.png) | ![illustration for MapPin](../../fontawesome-6/Solid/MapPin.Local.png) |




## MapPin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MapPin
include('fontawesome-6/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label')
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

' loads the Item which embeds the element MapPin
include('fontawesome-6/Solid/MapPin')

' renders the element
MapPin('MapPin', 'Map Pin', 'an optional tech label')
@enduml
```

