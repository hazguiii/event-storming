# Pfsense


```text
simpleicons-6/P/Pfsense
```

```text
include('simpleicons-6/P/Pfsense')
```



| Illustration | Pfsense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pfsense.png) | ![illustration for Pfsense](../../simpleicons-6/P/Pfsense.Local.png) |




## Pfsense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pfsense
include('simpleicons-6/P/Pfsense')

' renders the element
Pfsense('Pfsense', 'Pfsense', 'an optional tech label')
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

' loads the Item which embeds the element Pfsense
include('simpleicons-6/P/Pfsense')

' renders the element
Pfsense('Pfsense', 'Pfsense', 'an optional tech label')
@enduml
```

