# Kashflow


```text
simpleicons-6/K/Kashflow
```

```text
include('simpleicons-6/K/Kashflow')
```



| Illustration | Kashflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kashflow.png) | ![illustration for Kashflow](../../simpleicons-6/K/Kashflow.Local.png) |




## Kashflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kashflow
include('simpleicons-6/K/Kashflow')

' renders the element
Kashflow('Kashflow', 'Kashflow', 'an optional tech label')
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

' loads the Item which embeds the element Kashflow
include('simpleicons-6/K/Kashflow')

' renders the element
Kashflow('Kashflow', 'Kashflow', 'an optional tech label')
@enduml
```

