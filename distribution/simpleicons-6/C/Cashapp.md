# Cashapp


```text
simpleicons-6/C/Cashapp
```

```text
include('simpleicons-6/C/Cashapp')
```



| Illustration | Cashapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cashapp.png) | ![illustration for Cashapp](../../simpleicons-6/C/Cashapp.Local.png) |




## Cashapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cashapp
include('simpleicons-6/C/Cashapp')

' renders the element
Cashapp('Cashapp', 'Cashapp', 'an optional tech label')
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

' loads the Item which embeds the element Cashapp
include('simpleicons-6/C/Cashapp')

' renders the element
Cashapp('Cashapp', 'Cashapp', 'an optional tech label')
@enduml
```

