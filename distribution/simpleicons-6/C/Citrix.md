# Citrix


```text
simpleicons-6/C/Citrix
```

```text
include('simpleicons-6/C/Citrix')
```



| Illustration | Citrix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Citrix.png) | ![illustration for Citrix](../../simpleicons-6/C/Citrix.Local.png) |




## Citrix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Citrix
include('simpleicons-6/C/Citrix')

' renders the element
Citrix('Citrix', 'Citrix', 'an optional tech label')
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

' loads the Item which embeds the element Citrix
include('simpleicons-6/C/Citrix')

' renders the element
Citrix('Citrix', 'Citrix', 'an optional tech label')
@enduml
```

