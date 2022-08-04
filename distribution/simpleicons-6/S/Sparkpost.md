# Sparkpost


```text
simpleicons-6/S/Sparkpost
```

```text
include('simpleicons-6/S/Sparkpost')
```



| Illustration | Sparkpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sparkpost.png) | ![illustration for Sparkpost](../../simpleicons-6/S/Sparkpost.Local.png) |




## Sparkpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sparkpost
include('simpleicons-6/S/Sparkpost')

' renders the element
Sparkpost('Sparkpost', 'Sparkpost', 'an optional tech label')
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

' loads the Item which embeds the element Sparkpost
include('simpleicons-6/S/Sparkpost')

' renders the element
Sparkpost('Sparkpost', 'Sparkpost', 'an optional tech label')
@enduml
```

