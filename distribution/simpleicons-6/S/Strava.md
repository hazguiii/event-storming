# Strava


```text
simpleicons-6/S/Strava
```

```text
include('simpleicons-6/S/Strava')
```



| Illustration | Strava |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Strava.png) | ![illustration for Strava](../../simpleicons-6/S/Strava.Local.png) |




## Strava

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Strava
include('simpleicons-6/S/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label')
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

' loads the Item which embeds the element Strava
include('simpleicons-6/S/Strava')

' renders the element
Strava('Strava', 'Strava', 'an optional tech label')
@enduml
```

