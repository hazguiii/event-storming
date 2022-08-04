# Dataiku


```text
simpleicons-6/D/Dataiku
```

```text
include('simpleicons-6/D/Dataiku')
```



| Illustration | Dataiku |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dataiku.png) | ![illustration for Dataiku](../../simpleicons-6/D/Dataiku.Local.png) |




## Dataiku

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dataiku
include('simpleicons-6/D/Dataiku')

' renders the element
Dataiku('Dataiku', 'Dataiku', 'an optional tech label')
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

' loads the Item which embeds the element Dataiku
include('simpleicons-6/D/Dataiku')

' renders the element
Dataiku('Dataiku', 'Dataiku', 'an optional tech label')
@enduml
```

