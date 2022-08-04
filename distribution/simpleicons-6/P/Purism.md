# Purism


```text
simpleicons-6/P/Purism
```

```text
include('simpleicons-6/P/Purism')
```



| Illustration | Purism |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Purism.png) | ![illustration for Purism](../../simpleicons-6/P/Purism.Local.png) |




## Purism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Purism
include('simpleicons-6/P/Purism')

' renders the element
Purism('Purism', 'Purism', 'an optional tech label')
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

' loads the Item which embeds the element Purism
include('simpleicons-6/P/Purism')

' renders the element
Purism('Purism', 'Purism', 'an optional tech label')
@enduml
```

