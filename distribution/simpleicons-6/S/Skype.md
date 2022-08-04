# Skype


```text
simpleicons-6/S/Skype
```

```text
include('simpleicons-6/S/Skype')
```



| Illustration | Skype |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Skype.png) | ![illustration for Skype](../../simpleicons-6/S/Skype.Local.png) |




## Skype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Skype
include('simpleicons-6/S/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label')
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

' loads the Item which embeds the element Skype
include('simpleicons-6/S/Skype')

' renders the element
Skype('Skype', 'Skype', 'an optional tech label')
@enduml
```

