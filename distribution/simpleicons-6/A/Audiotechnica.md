# Audiotechnica


```text
simpleicons-6/A/Audiotechnica
```

```text
include('simpleicons-6/A/Audiotechnica')
```



| Illustration | Audiotechnica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Audiotechnica.png) | ![illustration for Audiotechnica](../../simpleicons-6/A/Audiotechnica.Local.png) |




## Audiotechnica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Audiotechnica
include('simpleicons-6/A/Audiotechnica')

' renders the element
Audiotechnica('Audiotechnica', 'Audiotechnica', 'an optional tech label')
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

' loads the Item which embeds the element Audiotechnica
include('simpleicons-6/A/Audiotechnica')

' renders the element
Audiotechnica('Audiotechnica', 'Audiotechnica', 'an optional tech label')
@enduml
```

