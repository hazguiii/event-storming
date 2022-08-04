# Adguard


```text
simpleicons-6/A/Adguard
```

```text
include('simpleicons-6/A/Adguard')
```



| Illustration | Adguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adguard.png) | ![illustration for Adguard](../../simpleicons-6/A/Adguard.Local.png) |




## Adguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adguard
include('simpleicons-6/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label')
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

' loads the Item which embeds the element Adguard
include('simpleicons-6/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label')
@enduml
```

