# Mediatek


```text
simpleicons-6/M/Mediatek
```

```text
include('simpleicons-6/M/Mediatek')
```



| Illustration | Mediatek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mediatek.png) | ![illustration for Mediatek](../../simpleicons-6/M/Mediatek.Local.png) |




## Mediatek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mediatek
include('simpleicons-6/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label')
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

' loads the Item which embeds the element Mediatek
include('simpleicons-6/M/Mediatek')

' renders the element
Mediatek('Mediatek', 'Mediatek', 'an optional tech label')
@enduml
```

