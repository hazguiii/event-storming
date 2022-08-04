# Artstation


```text
simpleicons-6/A/Artstation
```

```text
include('simpleicons-6/A/Artstation')
```



| Illustration | Artstation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Artstation.png) | ![illustration for Artstation](../../simpleicons-6/A/Artstation.Local.png) |




## Artstation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Artstation
include('simpleicons-6/A/Artstation')

' renders the element
Artstation('Artstation', 'Artstation', 'an optional tech label')
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

' loads the Item which embeds the element Artstation
include('simpleicons-6/A/Artstation')

' renders the element
Artstation('Artstation', 'Artstation', 'an optional tech label')
@enduml
```

