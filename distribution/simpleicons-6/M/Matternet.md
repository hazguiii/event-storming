# Matternet


```text
simpleicons-6/M/Matternet
```

```text
include('simpleicons-6/M/Matternet')
```



| Illustration | Matternet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Matternet.png) | ![illustration for Matternet](../../simpleicons-6/M/Matternet.Local.png) |




## Matternet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Matternet
include('simpleicons-6/M/Matternet')

' renders the element
Matternet('Matternet', 'Matternet', 'an optional tech label')
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

' loads the Item which embeds the element Matternet
include('simpleicons-6/M/Matternet')

' renders the element
Matternet('Matternet', 'Matternet', 'an optional tech label')
@enduml
```

