# Deno


```text
simpleicons-6/D/Deno
```

```text
include('simpleicons-6/D/Deno')
```



| Illustration | Deno |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Deno.png) | ![illustration for Deno](../../simpleicons-6/D/Deno.Local.png) |




## Deno

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Deno
include('simpleicons-6/D/Deno')

' renders the element
Deno('Deno', 'Deno', 'an optional tech label')
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

' loads the Item which embeds the element Deno
include('simpleicons-6/D/Deno')

' renders the element
Deno('Deno', 'Deno', 'an optional tech label')
@enduml
```

