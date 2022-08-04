# Vuejs


```text
fontawesome-6/Brands/Vuejs
```

```text
include('fontawesome-6/Brands/Vuejs')
```



| Illustration | Vuejs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Vuejs.png) | ![illustration for Vuejs](../../fontawesome-6/Brands/Vuejs.Local.png) |




## Vuejs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Vuejs
include('fontawesome-6/Brands/Vuejs')

' renders the element
Vuejs('Vuejs', 'Vuejs', 'an optional tech label')
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

' loads the Item which embeds the element Vuejs
include('fontawesome-6/Brands/Vuejs')

' renders the element
Vuejs('Vuejs', 'Vuejs', 'an optional tech label')
@enduml
```

