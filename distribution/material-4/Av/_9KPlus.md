# _9KPlus


```text
material-4/Av/_9KPlus
```

```text
include('material-4/Av/_9KPlus')
```



| Illustration | _9KPlus |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/_9KPlus.png) | ![illustration for _9KPlus](../../material-4/Av/_9KPlus.Local.png) |




## _9KPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element _9KPlus
include('material-4/Av/_9KPlus')

' renders the element
_9KPlus('9kPlus', '9k Plus', 'an optional tech label')
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

' loads the Item which embeds the element _9KPlus
include('material-4/Av/_9KPlus')

' renders the element
_9KPlus('9kPlus', '9k Plus', 'an optional tech label')
@enduml
```

