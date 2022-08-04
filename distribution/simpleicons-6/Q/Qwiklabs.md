# Qwiklabs


```text
simpleicons-6/Q/Qwiklabs
```

```text
include('simpleicons-6/Q/Qwiklabs')
```



| Illustration | Qwiklabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Qwiklabs.png) | ![illustration for Qwiklabs](../../simpleicons-6/Q/Qwiklabs.Local.png) |




## Qwiklabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Qwiklabs
include('simpleicons-6/Q/Qwiklabs')

' renders the element
Qwiklabs('Qwiklabs', 'Qwiklabs', 'an optional tech label')
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

' loads the Item which embeds the element Qwiklabs
include('simpleicons-6/Q/Qwiklabs')

' renders the element
Qwiklabs('Qwiklabs', 'Qwiklabs', 'an optional tech label')
@enduml
```

