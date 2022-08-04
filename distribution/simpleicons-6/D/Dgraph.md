# Dgraph


```text
simpleicons-6/D/Dgraph
```

```text
include('simpleicons-6/D/Dgraph')
```



| Illustration | Dgraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dgraph.png) | ![illustration for Dgraph](../../simpleicons-6/D/Dgraph.Local.png) |




## Dgraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dgraph
include('simpleicons-6/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label')
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

' loads the Item which embeds the element Dgraph
include('simpleicons-6/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label')
@enduml
```

