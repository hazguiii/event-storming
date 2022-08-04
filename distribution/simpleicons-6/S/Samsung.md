# Samsung


```text
simpleicons-6/S/Samsung
```

```text
include('simpleicons-6/S/Samsung')
```



| Illustration | Samsung |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Samsung.png) | ![illustration for Samsung](../../simpleicons-6/S/Samsung.Local.png) |




## Samsung

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Samsung
include('simpleicons-6/S/Samsung')

' renders the element
Samsung('Samsung', 'Samsung', 'an optional tech label')
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

' loads the Item which embeds the element Samsung
include('simpleicons-6/S/Samsung')

' renders the element
Samsung('Samsung', 'Samsung', 'an optional tech label')
@enduml
```

