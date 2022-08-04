# Groupme


```text
simpleicons-6/G/Groupme
```

```text
include('simpleicons-6/G/Groupme')
```



| Illustration | Groupme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Groupme.png) | ![illustration for Groupme](../../simpleicons-6/G/Groupme.Local.png) |




## Groupme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Groupme
include('simpleicons-6/G/Groupme')

' renders the element
Groupme('Groupme', 'Groupme', 'an optional tech label')
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

' loads the Item which embeds the element Groupme
include('simpleicons-6/G/Groupme')

' renders the element
Groupme('Groupme', 'Groupme', 'an optional tech label')
@enduml
```

