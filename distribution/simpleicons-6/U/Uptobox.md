# Uptobox


```text
simpleicons-6/U/Uptobox
```

```text
include('simpleicons-6/U/Uptobox')
```



| Illustration | Uptobox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Uptobox.png) | ![illustration for Uptobox](../../simpleicons-6/U/Uptobox.Local.png) |




## Uptobox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Uptobox
include('simpleicons-6/U/Uptobox')

' renders the element
Uptobox('Uptobox', 'Uptobox', 'an optional tech label')
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

' loads the Item which embeds the element Uptobox
include('simpleicons-6/U/Uptobox')

' renders the element
Uptobox('Uptobox', 'Uptobox', 'an optional tech label')
@enduml
```

