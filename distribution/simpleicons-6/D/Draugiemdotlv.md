# Draugiemdotlv


```text
simpleicons-6/D/Draugiemdotlv
```

```text
include('simpleicons-6/D/Draugiemdotlv')
```



| Illustration | Draugiemdotlv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Draugiemdotlv.png) | ![illustration for Draugiemdotlv](../../simpleicons-6/D/Draugiemdotlv.Local.png) |




## Draugiemdotlv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-6/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label')
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

' loads the Item which embeds the element Draugiemdotlv
include('simpleicons-6/D/Draugiemdotlv')

' renders the element
Draugiemdotlv('Draugiemdotlv', 'Draugiemdotlv', 'an optional tech label')
@enduml
```

