# Osu


```text
simpleicons-6/O/Osu
```

```text
include('simpleicons-6/O/Osu')
```



| Illustration | Osu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Osu.png) | ![illustration for Osu](../../simpleicons-6/O/Osu.Local.png) |




## Osu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Osu
include('simpleicons-6/O/Osu')

' renders the element
Osu('Osu', 'Osu', 'an optional tech label')
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

' loads the Item which embeds the element Osu
include('simpleicons-6/O/Osu')

' renders the element
Osu('Osu', 'Osu', 'an optional tech label')
@enduml
```

