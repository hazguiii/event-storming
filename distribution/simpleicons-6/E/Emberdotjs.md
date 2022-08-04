# Emberdotjs


```text
simpleicons-6/E/Emberdotjs
```

```text
include('simpleicons-6/E/Emberdotjs')
```



| Illustration | Emberdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Emberdotjs.png) | ![illustration for Emberdotjs](../../simpleicons-6/E/Emberdotjs.Local.png) |




## Emberdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Emberdotjs
include('simpleicons-6/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label')
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

' loads the Item which embeds the element Emberdotjs
include('simpleicons-6/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label')
@enduml
```

