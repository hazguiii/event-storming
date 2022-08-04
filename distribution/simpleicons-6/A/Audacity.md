# Audacity


```text
simpleicons-6/A/Audacity
```

```text
include('simpleicons-6/A/Audacity')
```



| Illustration | Audacity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Audacity.png) | ![illustration for Audacity](../../simpleicons-6/A/Audacity.Local.png) |




## Audacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Audacity
include('simpleicons-6/A/Audacity')

' renders the element
Audacity('Audacity', 'Audacity', 'an optional tech label')
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

' loads the Item which embeds the element Audacity
include('simpleicons-6/A/Audacity')

' renders the element
Audacity('Audacity', 'Audacity', 'an optional tech label')
@enduml
```

