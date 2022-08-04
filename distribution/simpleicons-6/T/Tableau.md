# Tableau


```text
simpleicons-6/T/Tableau
```

```text
include('simpleicons-6/T/Tableau')
```



| Illustration | Tableau |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tableau.png) | ![illustration for Tableau](../../simpleicons-6/T/Tableau.Local.png) |




## Tableau

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tableau
include('simpleicons-6/T/Tableau')

' renders the element
Tableau('Tableau', 'Tableau', 'an optional tech label')
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

' loads the Item which embeds the element Tableau
include('simpleicons-6/T/Tableau')

' renders the element
Tableau('Tableau', 'Tableau', 'an optional tech label')
@enduml
```

