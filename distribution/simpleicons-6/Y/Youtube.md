# Youtube


```text
simpleicons-6/Y/Youtube
```

```text
include('simpleicons-6/Y/Youtube')
```



| Illustration | Youtube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Y/Youtube.png) | ![illustration for Youtube](../../simpleicons-6/Y/Youtube.Local.png) |




## Youtube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Youtube
include('simpleicons-6/Y/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
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

' loads the Item which embeds the element Youtube
include('simpleicons-6/Y/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
@enduml
```

