# Popos


```text
simpleicons-6/P/Popos
```

```text
include('simpleicons-6/P/Popos')
```



| Illustration | Popos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Popos.png) | ![illustration for Popos](../../simpleicons-6/P/Popos.Local.png) |




## Popos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Popos
include('simpleicons-6/P/Popos')

' renders the element
Popos('Popos', 'Popos', 'an optional tech label')
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

' loads the Item which embeds the element Popos
include('simpleicons-6/P/Popos')

' renders the element
Popos('Popos', 'Popos', 'an optional tech label')
@enduml
```

