# LunchDining


```text
material-4/Maps/LunchDining
```

```text
include('material-4/Maps/LunchDining')
```



| Illustration | LunchDining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LunchDining.png) | ![illustration for LunchDining](../../material-4/Maps/LunchDining.Local.png) |




## LunchDining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LunchDining
include('material-4/Maps/LunchDining')

' renders the element
LunchDining('LunchDining', 'Lunch Dining', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element LunchDining
include('material-4/Maps/LunchDining')

' renders the element
LunchDining('LunchDining', 'Lunch Dining', 'an optional tech label')
@enduml
```

