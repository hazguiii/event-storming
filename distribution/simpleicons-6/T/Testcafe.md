# Testcafe


```text
simpleicons-6/T/Testcafe
```

```text
include('simpleicons-6/T/Testcafe')
```



| Illustration | Testcafe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Testcafe.png) | ![illustration for Testcafe](../../simpleicons-6/T/Testcafe.Local.png) |




## Testcafe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Testcafe
include('simpleicons-6/T/Testcafe')

' renders the element
Testcafe('Testcafe', 'Testcafe', 'an optional tech label')
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

' loads the Item which embeds the element Testcafe
include('simpleicons-6/T/Testcafe')

' renders the element
Testcafe('Testcafe', 'Testcafe', 'an optional tech label')
@enduml
```

