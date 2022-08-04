# Pluscodes


```text
simpleicons-6/P/Pluscodes
```

```text
include('simpleicons-6/P/Pluscodes')
```



| Illustration | Pluscodes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pluscodes.png) | ![illustration for Pluscodes](../../simpleicons-6/P/Pluscodes.Local.png) |




## Pluscodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pluscodes
include('simpleicons-6/P/Pluscodes')

' renders the element
Pluscodes('Pluscodes', 'Pluscodes', 'an optional tech label')
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

' loads the Item which embeds the element Pluscodes
include('simpleicons-6/P/Pluscodes')

' renders the element
Pluscodes('Pluscodes', 'Pluscodes', 'an optional tech label')
@enduml
```

