# Apachehive


```text
simpleicons-6/A/Apachehive
```

```text
include('simpleicons-6/A/Apachehive')
```



| Illustration | Apachehive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apachehive.png) | ![illustration for Apachehive](../../simpleicons-6/A/Apachehive.Local.png) |




## Apachehive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachehive
include('simpleicons-6/A/Apachehive')

' renders the element
Apachehive('Apachehive', 'Apachehive', 'an optional tech label')
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

' loads the Item which embeds the element Apachehive
include('simpleicons-6/A/Apachehive')

' renders the element
Apachehive('Apachehive', 'Apachehive', 'an optional tech label')
@enduml
```

