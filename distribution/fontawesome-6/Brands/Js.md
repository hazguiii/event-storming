# Js


```text
fontawesome-6/Brands/Js
```

```text
include('fontawesome-6/Brands/Js')
```



| Illustration | Js |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Js.png) | ![illustration for Js](../../fontawesome-6/Brands/Js.Local.png) |




## Js

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Js
include('fontawesome-6/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label')
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

' loads the Item which embeds the element Js
include('fontawesome-6/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label')
@enduml
```

