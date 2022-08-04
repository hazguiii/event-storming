# Hotel


```text
fontawesome-6/Solid/Hotel
```

```text
include('fontawesome-6/Solid/Hotel')
```



| Illustration | Hotel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Hotel.png) | ![illustration for Hotel](../../fontawesome-6/Solid/Hotel.Local.png) |




## Hotel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Hotel
include('fontawesome-6/Solid/Hotel')

' renders the element
Hotel('Hotel', 'Hotel', 'an optional tech label')
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

' loads the Item which embeds the element Hotel
include('fontawesome-6/Solid/Hotel')

' renders the element
Hotel('Hotel', 'Hotel', 'an optional tech label')
@enduml
```

