# Scikitlearn


```text
simpleicons-6/S/Scikitlearn
```

```text
include('simpleicons-6/S/Scikitlearn')
```



| Illustration | Scikitlearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Scikitlearn.png) | ![illustration for Scikitlearn](../../simpleicons-6/S/Scikitlearn.Local.png) |




## Scikitlearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Scikitlearn
include('simpleicons-6/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label')
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

' loads the Item which embeds the element Scikitlearn
include('simpleicons-6/S/Scikitlearn')

' renders the element
Scikitlearn('Scikitlearn', 'Scikitlearn', 'an optional tech label')
@enduml
```

