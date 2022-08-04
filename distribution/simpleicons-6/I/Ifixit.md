# Ifixit


```text
simpleicons-6/I/Ifixit
```

```text
include('simpleicons-6/I/Ifixit')
```



| Illustration | Ifixit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ifixit.png) | ![illustration for Ifixit](../../simpleicons-6/I/Ifixit.Local.png) |




## Ifixit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ifixit
include('simpleicons-6/I/Ifixit')

' renders the element
Ifixit('Ifixit', 'Ifixit', 'an optional tech label')
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

' loads the Item which embeds the element Ifixit
include('simpleicons-6/I/Ifixit')

' renders the element
Ifixit('Ifixit', 'Ifixit', 'an optional tech label')
@enduml
```

