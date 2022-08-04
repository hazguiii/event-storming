# Datacamp


```text
simpleicons-6/D/Datacamp
```

```text
include('simpleicons-6/D/Datacamp')
```



| Illustration | Datacamp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Datacamp.png) | ![illustration for Datacamp](../../simpleicons-6/D/Datacamp.Local.png) |




## Datacamp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Datacamp
include('simpleicons-6/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label')
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

' loads the Item which embeds the element Datacamp
include('simpleicons-6/D/Datacamp')

' renders the element
Datacamp('Datacamp', 'Datacamp', 'an optional tech label')
@enduml
```

