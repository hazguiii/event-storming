# Twitch


```text
simpleicons-6/T/Twitch
```

```text
include('simpleicons-6/T/Twitch')
```



| Illustration | Twitch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Twitch.png) | ![illustration for Twitch](../../simpleicons-6/T/Twitch.Local.png) |




## Twitch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Twitch
include('simpleicons-6/T/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label')
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

' loads the Item which embeds the element Twitch
include('simpleicons-6/T/Twitch')

' renders the element
Twitch('Twitch', 'Twitch', 'an optional tech label')
@enduml
```

