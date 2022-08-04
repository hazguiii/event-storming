# Autohotkey


```text
simpleicons-6/A/Autohotkey
```

```text
include('simpleicons-6/A/Autohotkey')
```



| Illustration | Autohotkey |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Autohotkey.png) | ![illustration for Autohotkey](../../simpleicons-6/A/Autohotkey.Local.png) |




## Autohotkey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Autohotkey
include('simpleicons-6/A/Autohotkey')

' renders the element
Autohotkey('Autohotkey', 'Autohotkey', 'an optional tech label')
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

' loads the Item which embeds the element Autohotkey
include('simpleicons-6/A/Autohotkey')

' renders the element
Autohotkey('Autohotkey', 'Autohotkey', 'an optional tech label')
@enduml
```

