# Musescore


```text
simpleicons-6/M/Musescore
```

```text
include('simpleicons-6/M/Musescore')
```



| Illustration | Musescore |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Musescore.png) | ![illustration for Musescore](../../simpleicons-6/M/Musescore.Local.png) |




## Musescore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Musescore
include('simpleicons-6/M/Musescore')

' renders the element
Musescore('Musescore', 'Musescore', 'an optional tech label')
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

' loads the Item which embeds the element Musescore
include('simpleicons-6/M/Musescore')

' renders the element
Musescore('Musescore', 'Musescore', 'an optional tech label')
@enduml
```

