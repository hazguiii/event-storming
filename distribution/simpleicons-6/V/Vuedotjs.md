# Vuedotjs


```text
simpleicons-6/V/Vuedotjs
```

```text
include('simpleicons-6/V/Vuedotjs')
```



| Illustration | Vuedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vuedotjs.png) | ![illustration for Vuedotjs](../../simpleicons-6/V/Vuedotjs.Local.png) |




## Vuedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vuedotjs
include('simpleicons-6/V/Vuedotjs')

' renders the element
Vuedotjs('Vuedotjs', 'Vuedotjs', 'an optional tech label')
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

' loads the Item which embeds the element Vuedotjs
include('simpleicons-6/V/Vuedotjs')

' renders the element
Vuedotjs('Vuedotjs', 'Vuedotjs', 'an optional tech label')
@enduml
```

