# Homify


```text
simpleicons-6/H/Homify
```

```text
include('simpleicons-6/H/Homify')
```



| Illustration | Homify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Homify.png) | ![illustration for Homify](../../simpleicons-6/H/Homify.Local.png) |




## Homify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Homify
include('simpleicons-6/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label')
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

' loads the Item which embeds the element Homify
include('simpleicons-6/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label')
@enduml
```

