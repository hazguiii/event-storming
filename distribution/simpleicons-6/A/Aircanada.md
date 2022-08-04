# Aircanada


```text
simpleicons-6/A/Aircanada
```

```text
include('simpleicons-6/A/Aircanada')
```



| Illustration | Aircanada |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aircanada.png) | ![illustration for Aircanada](../../simpleicons-6/A/Aircanada.Local.png) |




## Aircanada

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aircanada
include('simpleicons-6/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label')
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

' loads the Item which embeds the element Aircanada
include('simpleicons-6/A/Aircanada')

' renders the element
Aircanada('Aircanada', 'Aircanada', 'an optional tech label')
@enduml
```

