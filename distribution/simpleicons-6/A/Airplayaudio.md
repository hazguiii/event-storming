# Airplayaudio


```text
simpleicons-6/A/Airplayaudio
```

```text
include('simpleicons-6/A/Airplayaudio')
```



| Illustration | Airplayaudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Airplayaudio.png) | ![illustration for Airplayaudio](../../simpleicons-6/A/Airplayaudio.Local.png) |




## Airplayaudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Airplayaudio
include('simpleicons-6/A/Airplayaudio')

' renders the element
Airplayaudio('Airplayaudio', 'Airplayaudio', 'an optional tech label')
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

' loads the Item which embeds the element Airplayaudio
include('simpleicons-6/A/Airplayaudio')

' renders the element
Airplayaudio('Airplayaudio', 'Airplayaudio', 'an optional tech label')
@enduml
```

