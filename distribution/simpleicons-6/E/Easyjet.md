# Easyjet


```text
simpleicons-6/E/Easyjet
```

```text
include('simpleicons-6/E/Easyjet')
```



| Illustration | Easyjet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Easyjet.png) | ![illustration for Easyjet](../../simpleicons-6/E/Easyjet.Local.png) |




## Easyjet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Easyjet
include('simpleicons-6/E/Easyjet')

' renders the element
Easyjet('Easyjet', 'Easyjet', 'an optional tech label')
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

' loads the Item which embeds the element Easyjet
include('simpleicons-6/E/Easyjet')

' renders the element
Easyjet('Easyjet', 'Easyjet', 'an optional tech label')
@enduml
```

