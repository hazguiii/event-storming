# PregnantWoman


```text
material-4/Action/PregnantWoman
```

```text
include('material-4/Action/PregnantWoman')
```



| Illustration | PregnantWoman |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PregnantWoman.png) | ![illustration for PregnantWoman](../../material-4/Action/PregnantWoman.Local.png) |




## PregnantWoman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PregnantWoman
include('material-4/Action/PregnantWoman')

' renders the element
PregnantWoman('PregnantWoman', 'Pregnant Woman', 'an optional tech label')
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

' loads the Item which embeds the element PregnantWoman
include('material-4/Action/PregnantWoman')

' renders the element
PregnantWoman('PregnantWoman', 'Pregnant Woman', 'an optional tech label')
@enduml
```

