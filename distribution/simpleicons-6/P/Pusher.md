# Pusher


```text
simpleicons-6/P/Pusher
```

```text
include('simpleicons-6/P/Pusher')
```



| Illustration | Pusher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pusher.png) | ![illustration for Pusher](../../simpleicons-6/P/Pusher.Local.png) |




## Pusher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pusher
include('simpleicons-6/P/Pusher')

' renders the element
Pusher('Pusher', 'Pusher', 'an optional tech label')
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

' loads the Item which embeds the element Pusher
include('simpleicons-6/P/Pusher')

' renders the element
Pusher('Pusher', 'Pusher', 'an optional tech label')
@enduml
```

