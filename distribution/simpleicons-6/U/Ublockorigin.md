# Ublockorigin


```text
simpleicons-6/U/Ublockorigin
```

```text
include('simpleicons-6/U/Ublockorigin')
```



| Illustration | Ublockorigin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Ublockorigin.png) | ![illustration for Ublockorigin](../../simpleicons-6/U/Ublockorigin.Local.png) |




## Ublockorigin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ublockorigin
include('simpleicons-6/U/Ublockorigin')

' renders the element
Ublockorigin('Ublockorigin', 'Ublockorigin', 'an optional tech label')
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

' loads the Item which embeds the element Ublockorigin
include('simpleicons-6/U/Ublockorigin')

' renders the element
Ublockorigin('Ublockorigin', 'Ublockorigin', 'an optional tech label')
@enduml
```

