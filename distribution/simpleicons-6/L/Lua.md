# Lua


```text
simpleicons-6/L/Lua
```

```text
include('simpleicons-6/L/Lua')
```



| Illustration | Lua |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lua.png) | ![illustration for Lua](../../simpleicons-6/L/Lua.Local.png) |




## Lua

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lua
include('simpleicons-6/L/Lua')

' renders the element
Lua('Lua', 'Lua', 'an optional tech label')
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

' loads the Item which embeds the element Lua
include('simpleicons-6/L/Lua')

' renders the element
Lua('Lua', 'Lua', 'an optional tech label')
@enduml
```

