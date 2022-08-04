# Wix


```text
simpleicons-6/W/Wix
```

```text
include('simpleicons-6/W/Wix')
```



| Illustration | Wix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wix.png) | ![illustration for Wix](../../simpleicons-6/W/Wix.Local.png) |




## Wix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wix
include('simpleicons-6/W/Wix')

' renders the element
Wix('Wix', 'Wix', 'an optional tech label')
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

' loads the Item which embeds the element Wix
include('simpleicons-6/W/Wix')

' renders the element
Wix('Wix', 'Wix', 'an optional tech label')
@enduml
```

