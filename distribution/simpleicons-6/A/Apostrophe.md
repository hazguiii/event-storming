# Apostrophe


```text
simpleicons-6/A/Apostrophe
```

```text
include('simpleicons-6/A/Apostrophe')
```



| Illustration | Apostrophe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apostrophe.png) | ![illustration for Apostrophe](../../simpleicons-6/A/Apostrophe.Local.png) |




## Apostrophe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apostrophe
include('simpleicons-6/A/Apostrophe')

' renders the element
Apostrophe('Apostrophe', 'Apostrophe', 'an optional tech label')
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

' loads the Item which embeds the element Apostrophe
include('simpleicons-6/A/Apostrophe')

' renders the element
Apostrophe('Apostrophe', 'Apostrophe', 'an optional tech label')
@enduml
```

