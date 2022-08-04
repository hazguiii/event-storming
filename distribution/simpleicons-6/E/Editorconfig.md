# Editorconfig


```text
simpleicons-6/E/Editorconfig
```

```text
include('simpleicons-6/E/Editorconfig')
```



| Illustration | Editorconfig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Editorconfig.png) | ![illustration for Editorconfig](../../simpleicons-6/E/Editorconfig.Local.png) |




## Editorconfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Editorconfig
include('simpleicons-6/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label')
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

' loads the Item which embeds the element Editorconfig
include('simpleicons-6/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label')
@enduml
```

