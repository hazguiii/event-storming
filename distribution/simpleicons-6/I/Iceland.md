# Iceland


```text
simpleicons-6/I/Iceland
```

```text
include('simpleicons-6/I/Iceland')
```



| Illustration | Iceland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Iceland.png) | ![illustration for Iceland](../../simpleicons-6/I/Iceland.Local.png) |




## Iceland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Iceland
include('simpleicons-6/I/Iceland')

' renders the element
Iceland('Iceland', 'Iceland', 'an optional tech label')
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

' loads the Item which embeds the element Iceland
include('simpleicons-6/I/Iceland')

' renders the element
Iceland('Iceland', 'Iceland', 'an optional tech label')
@enduml
```

