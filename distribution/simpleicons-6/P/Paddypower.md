# Paddypower


```text
simpleicons-6/P/Paddypower
```

```text
include('simpleicons-6/P/Paddypower')
```



| Illustration | Paddypower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Paddypower.png) | ![illustration for Paddypower](../../simpleicons-6/P/Paddypower.Local.png) |




## Paddypower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Paddypower
include('simpleicons-6/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label')
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

' loads the Item which embeds the element Paddypower
include('simpleicons-6/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label')
@enduml
```

