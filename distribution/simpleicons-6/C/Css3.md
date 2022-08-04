# Css3


```text
simpleicons-6/C/Css3
```

```text
include('simpleicons-6/C/Css3')
```



| Illustration | Css3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Css3.png) | ![illustration for Css3](../../simpleicons-6/C/Css3.Local.png) |




## Css3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Css3
include('simpleicons-6/C/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label')
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

' loads the Item which embeds the element Css3
include('simpleicons-6/C/Css3')

' renders the element
Css3('Css3', 'Css3', 'an optional tech label')
@enduml
```

