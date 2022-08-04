# Tesla


```text
simpleicons-6/T/Tesla
```

```text
include('simpleicons-6/T/Tesla')
```



| Illustration | Tesla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tesla.png) | ![illustration for Tesla](../../simpleicons-6/T/Tesla.Local.png) |




## Tesla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tesla
include('simpleicons-6/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label')
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

' loads the Item which embeds the element Tesla
include('simpleicons-6/T/Tesla')

' renders the element
Tesla('Tesla', 'Tesla', 'an optional tech label')
@enduml
```

