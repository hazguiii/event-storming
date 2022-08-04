# Mlb


```text
simpleicons-6/M/Mlb
```

```text
include('simpleicons-6/M/Mlb')
```



| Illustration | Mlb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mlb.png) | ![illustration for Mlb](../../simpleicons-6/M/Mlb.Local.png) |




## Mlb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mlb
include('simpleicons-6/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label')
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

' loads the Item which embeds the element Mlb
include('simpleicons-6/M/Mlb')

' renders the element
Mlb('Mlb', 'Mlb', 'an optional tech label')
@enduml
```

