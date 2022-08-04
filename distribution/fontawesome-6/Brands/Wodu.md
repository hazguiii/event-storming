# Wodu


```text
fontawesome-6/Brands/Wodu
```

```text
include('fontawesome-6/Brands/Wodu')
```



| Illustration | Wodu |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Wodu.png) | ![illustration for Wodu](../../fontawesome-6/Brands/Wodu.Local.png) |




## Wodu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wodu
include('fontawesome-6/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label')
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

' loads the Item which embeds the element Wodu
include('fontawesome-6/Brands/Wodu')

' renders the element
Wodu('Wodu', 'Wodu', 'an optional tech label')
@enduml
```

