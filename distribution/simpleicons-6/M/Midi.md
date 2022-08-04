# Midi


```text
simpleicons-6/M/Midi
```

```text
include('simpleicons-6/M/Midi')
```



| Illustration | Midi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Midi.png) | ![illustration for Midi](../../simpleicons-6/M/Midi.Local.png) |




## Midi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons-6/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label')
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

' loads the Item which embeds the element Midi
include('simpleicons-6/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label')
@enduml
```

