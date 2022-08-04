# Upcloud


```text
simpleicons-6/U/Upcloud
```

```text
include('simpleicons-6/U/Upcloud')
```



| Illustration | Upcloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Upcloud.png) | ![illustration for Upcloud](../../simpleicons-6/U/Upcloud.Local.png) |




## Upcloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Upcloud
include('simpleicons-6/U/Upcloud')

' renders the element
Upcloud('Upcloud', 'Upcloud', 'an optional tech label')
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

' loads the Item which embeds the element Upcloud
include('simpleicons-6/U/Upcloud')

' renders the element
Upcloud('Upcloud', 'Upcloud', 'an optional tech label')
@enduml
```

