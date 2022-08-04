# Renovatebot


```text
simpleicons-6/R/Renovatebot
```

```text
include('simpleicons-6/R/Renovatebot')
```



| Illustration | Renovatebot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Renovatebot.png) | ![illustration for Renovatebot](../../simpleicons-6/R/Renovatebot.Local.png) |




## Renovatebot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Renovatebot
include('simpleicons-6/R/Renovatebot')

' renders the element
Renovatebot('Renovatebot', 'Renovatebot', 'an optional tech label')
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

' loads the Item which embeds the element Renovatebot
include('simpleicons-6/R/Renovatebot')

' renders the element
Renovatebot('Renovatebot', 'Renovatebot', 'an optional tech label')
@enduml
```

