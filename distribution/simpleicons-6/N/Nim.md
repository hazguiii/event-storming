# Nim


```text
simpleicons-6/N/Nim
```

```text
include('simpleicons-6/N/Nim')
```



| Illustration | Nim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nim.png) | ![illustration for Nim](../../simpleicons-6/N/Nim.Local.png) |




## Nim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nim
include('simpleicons-6/N/Nim')

' renders the element
Nim('Nim', 'Nim', 'an optional tech label')
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

' loads the Item which embeds the element Nim
include('simpleicons-6/N/Nim')

' renders the element
Nim('Nim', 'Nim', 'an optional tech label')
@enduml
```

