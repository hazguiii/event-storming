# Payoneer


```text
simpleicons-6/P/Payoneer
```

```text
include('simpleicons-6/P/Payoneer')
```



| Illustration | Payoneer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Payoneer.png) | ![illustration for Payoneer](../../simpleicons-6/P/Payoneer.Local.png) |




## Payoneer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Payoneer
include('simpleicons-6/P/Payoneer')

' renders the element
Payoneer('Payoneer', 'Payoneer', 'an optional tech label')
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

' loads the Item which embeds the element Payoneer
include('simpleicons-6/P/Payoneer')

' renders the element
Payoneer('Payoneer', 'Payoneer', 'an optional tech label')
@enduml
```

