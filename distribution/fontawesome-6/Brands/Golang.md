# Golang


```text
fontawesome-6/Brands/Golang
```

```text
include('fontawesome-6/Brands/Golang')
```



| Illustration | Golang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Golang.png) | ![illustration for Golang](../../fontawesome-6/Brands/Golang.Local.png) |




## Golang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Golang
include('fontawesome-6/Brands/Golang')

' renders the element
Golang('Golang', 'Golang', 'an optional tech label')
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

' loads the Item which embeds the element Golang
include('fontawesome-6/Brands/Golang')

' renders the element
Golang('Golang', 'Golang', 'an optional tech label')
@enduml
```

