# Linkedin


```text
simpleicons-6/L/Linkedin
```

```text
include('simpleicons-6/L/Linkedin')
```



| Illustration | Linkedin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linkedin.png) | ![illustration for Linkedin](../../simpleicons-6/L/Linkedin.Local.png) |




## Linkedin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linkedin
include('simpleicons-6/L/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linkedin
include('simpleicons-6/L/Linkedin')

' renders the element
Linkedin('Linkedin', 'Linkedin', 'an optional tech label')
@enduml
```
