# Saucelabs


```text
simpleicons-6/S/Saucelabs
```

```text
include('simpleicons-6/S/Saucelabs')
```



| Illustration | Saucelabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Saucelabs.png) | ![illustration for Saucelabs](../../simpleicons-6/S/Saucelabs.Local.png) |




## Saucelabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Saucelabs
include('simpleicons-6/S/Saucelabs')

' renders the element
Saucelabs('Saucelabs', 'Saucelabs', 'an optional tech label')
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

' loads the Item which embeds the element Saucelabs
include('simpleicons-6/S/Saucelabs')

' renders the element
Saucelabs('Saucelabs', 'Saucelabs', 'an optional tech label')
@enduml
```

