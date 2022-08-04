# Amg


```text
simpleicons-6/A/Amg
```

```text
include('simpleicons-6/A/Amg')
```



| Illustration | Amg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Amg.png) | ![illustration for Amg](../../simpleicons-6/A/Amg.Local.png) |




## Amg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Amg
include('simpleicons-6/A/Amg')

' renders the element
Amg('Amg', 'Amg', 'an optional tech label')
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

' loads the Item which embeds the element Amg
include('simpleicons-6/A/Amg')

' renders the element
Amg('Amg', 'Amg', 'an optional tech label')
@enduml
```

