# Discogs


```text
simpleicons-6/D/Discogs
```

```text
include('simpleicons-6/D/Discogs')
```



| Illustration | Discogs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Discogs.png) | ![illustration for Discogs](../../simpleicons-6/D/Discogs.Local.png) |




## Discogs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Discogs
include('simpleicons-6/D/Discogs')

' renders the element
Discogs('Discogs', 'Discogs', 'an optional tech label')
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

' loads the Item which embeds the element Discogs
include('simpleicons-6/D/Discogs')

' renders the element
Discogs('Discogs', 'Discogs', 'an optional tech label')
@enduml
```

