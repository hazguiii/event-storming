# Cloud66


```text
simpleicons-6/C/Cloud66
```

```text
include('simpleicons-6/C/Cloud66')
```



| Illustration | Cloud66 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cloud66.png) | ![illustration for Cloud66](../../simpleicons-6/C/Cloud66.Local.png) |




## Cloud66

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cloud66
include('simpleicons-6/C/Cloud66')

' renders the element
Cloud66('Cloud66', 'Cloud66', 'an optional tech label')
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

' loads the Item which embeds the element Cloud66
include('simpleicons-6/C/Cloud66')

' renders the element
Cloud66('Cloud66', 'Cloud66', 'an optional tech label')
@enduml
```

