# Less


```text
simpleicons-6/L/Less
```

```text
include('simpleicons-6/L/Less')
```



| Illustration | Less |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Less.png) | ![illustration for Less](../../simpleicons-6/L/Less.Local.png) |




## Less

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Less
include('simpleicons-6/L/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label')
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

' loads the Item which embeds the element Less
include('simpleicons-6/L/Less')

' renders the element
Less('Less', 'Less', 'an optional tech label')
@enduml
```

