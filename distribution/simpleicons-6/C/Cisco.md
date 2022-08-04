# Cisco


```text
simpleicons-6/C/Cisco
```

```text
include('simpleicons-6/C/Cisco')
```



| Illustration | Cisco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cisco.png) | ![illustration for Cisco](../../simpleicons-6/C/Cisco.Local.png) |




## Cisco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cisco
include('simpleicons-6/C/Cisco')

' renders the element
Cisco('Cisco', 'Cisco', 'an optional tech label')
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

' loads the Item which embeds the element Cisco
include('simpleicons-6/C/Cisco')

' renders the element
Cisco('Cisco', 'Cisco', 'an optional tech label')
@enduml
```

