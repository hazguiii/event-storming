# Ionos


```text
simpleicons-6/I/Ionos
```

```text
include('simpleicons-6/I/Ionos')
```



| Illustration | Ionos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ionos.png) | ![illustration for Ionos](../../simpleicons-6/I/Ionos.Local.png) |




## Ionos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ionos
include('simpleicons-6/I/Ionos')

' renders the element
Ionos('Ionos', 'Ionos', 'an optional tech label')
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

' loads the Item which embeds the element Ionos
include('simpleicons-6/I/Ionos')

' renders the element
Ionos('Ionos', 'Ionos', 'an optional tech label')
@enduml
```

