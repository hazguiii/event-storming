# Metro


```text
simpleicons-6/M/Metro
```

```text
include('simpleicons-6/M/Metro')
```



| Illustration | Metro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Metro.png) | ![illustration for Metro](../../simpleicons-6/M/Metro.Local.png) |




## Metro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Metro
include('simpleicons-6/M/Metro')

' renders the element
Metro('Metro', 'Metro', 'an optional tech label')
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

' loads the Item which embeds the element Metro
include('simpleicons-6/M/Metro')

' renders the element
Metro('Metro', 'Metro', 'an optional tech label')
@enduml
```

