# Pagelines


```text
fontawesome-6/Brands/Pagelines
```

```text
include('fontawesome-6/Brands/Pagelines')
```



| Illustration | Pagelines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Pagelines.png) | ![illustration for Pagelines](../../fontawesome-6/Brands/Pagelines.Local.png) |




## Pagelines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pagelines
include('fontawesome-6/Brands/Pagelines')

' renders the element
Pagelines('Pagelines', 'Pagelines', 'an optional tech label')
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

' loads the Item which embeds the element Pagelines
include('fontawesome-6/Brands/Pagelines')

' renders the element
Pagelines('Pagelines', 'Pagelines', 'an optional tech label')
@enduml
```

