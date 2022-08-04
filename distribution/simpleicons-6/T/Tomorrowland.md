# Tomorrowland


```text
simpleicons-6/T/Tomorrowland
```

```text
include('simpleicons-6/T/Tomorrowland')
```



| Illustration | Tomorrowland |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tomorrowland.png) | ![illustration for Tomorrowland](../../simpleicons-6/T/Tomorrowland.Local.png) |




## Tomorrowland

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tomorrowland
include('simpleicons-6/T/Tomorrowland')

' renders the element
Tomorrowland('Tomorrowland', 'Tomorrowland', 'an optional tech label')
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

' loads the Item which embeds the element Tomorrowland
include('simpleicons-6/T/Tomorrowland')

' renders the element
Tomorrowland('Tomorrowland', 'Tomorrowland', 'an optional tech label')
@enduml
```

