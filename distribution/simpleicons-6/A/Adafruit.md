# Adafruit


```text
simpleicons-6/A/Adafruit
```

```text
include('simpleicons-6/A/Adafruit')
```



| Illustration | Adafruit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adafruit.png) | ![illustration for Adafruit](../../simpleicons-6/A/Adafruit.Local.png) |




## Adafruit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adafruit
include('simpleicons-6/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label')
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

' loads the Item which embeds the element Adafruit
include('simpleicons-6/A/Adafruit')

' renders the element
Adafruit('Adafruit', 'Adafruit', 'an optional tech label')
@enduml
```

