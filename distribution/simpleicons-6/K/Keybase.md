# Keybase


```text
simpleicons-6/K/Keybase
```

```text
include('simpleicons-6/K/Keybase')
```



| Illustration | Keybase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Keybase.png) | ![illustration for Keybase](../../simpleicons-6/K/Keybase.Local.png) |




## Keybase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Keybase
include('simpleicons-6/K/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
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

' loads the Item which embeds the element Keybase
include('simpleicons-6/K/Keybase')

' renders the element
Keybase('Keybase', 'Keybase', 'an optional tech label')
@enduml
```

