# Wetransfer


```text
simpleicons-6/W/Wetransfer
```

```text
include('simpleicons-6/W/Wetransfer')
```



| Illustration | Wetransfer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wetransfer.png) | ![illustration for Wetransfer](../../simpleicons-6/W/Wetransfer.Local.png) |




## Wetransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wetransfer
include('simpleicons-6/W/Wetransfer')

' renders the element
Wetransfer('Wetransfer', 'Wetransfer', 'an optional tech label')
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

' loads the Item which embeds the element Wetransfer
include('simpleicons-6/W/Wetransfer')

' renders the element
Wetransfer('Wetransfer', 'Wetransfer', 'an optional tech label')
@enduml
```

