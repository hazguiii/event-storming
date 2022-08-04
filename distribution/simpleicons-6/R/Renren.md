# Renren


```text
simpleicons-6/R/Renren
```

```text
include('simpleicons-6/R/Renren')
```



| Illustration | Renren |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Renren.png) | ![illustration for Renren](../../simpleicons-6/R/Renren.Local.png) |




## Renren

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Renren
include('simpleicons-6/R/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label')
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

' loads the Item which embeds the element Renren
include('simpleicons-6/R/Renren')

' renders the element
Renren('Renren', 'Renren', 'an optional tech label')
@enduml
```

