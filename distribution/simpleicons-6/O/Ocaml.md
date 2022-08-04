# Ocaml


```text
simpleicons-6/O/Ocaml
```

```text
include('simpleicons-6/O/Ocaml')
```



| Illustration | Ocaml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Ocaml.png) | ![illustration for Ocaml](../../simpleicons-6/O/Ocaml.Local.png) |




## Ocaml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ocaml
include('simpleicons-6/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label')
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

' loads the Item which embeds the element Ocaml
include('simpleicons-6/O/Ocaml')

' renders the element
Ocaml('Ocaml', 'Ocaml', 'an optional tech label')
@enduml
```

