# Known


```text
simpleicons-6/K/Known
```

```text
include('simpleicons-6/K/Known')
```



| Illustration | Known |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Known.png) | ![illustration for Known](../../simpleicons-6/K/Known.Local.png) |




## Known

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Known
include('simpleicons-6/K/Known')

' renders the element
Known('Known', 'Known', 'an optional tech label')
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

' loads the Item which embeds the element Known
include('simpleicons-6/K/Known')

' renders the element
Known('Known', 'Known', 'an optional tech label')
@enduml
```

