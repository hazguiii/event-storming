# Baremetrics


```text
simpleicons-6/B/Baremetrics
```

```text
include('simpleicons-6/B/Baremetrics')
```



| Illustration | Baremetrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Baremetrics.png) | ![illustration for Baremetrics](../../simpleicons-6/B/Baremetrics.Local.png) |




## Baremetrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Baremetrics
include('simpleicons-6/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label')
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

' loads the Item which embeds the element Baremetrics
include('simpleicons-6/B/Baremetrics')

' renders the element
Baremetrics('Baremetrics', 'Baremetrics', 'an optional tech label')
@enduml
```

