# StrikethroughS


```text
material-4/Editor/StrikethroughS
```

```text
include('material-4/Editor/StrikethroughS')
```



| Illustration | StrikethroughS |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/StrikethroughS.png) | ![illustration for StrikethroughS](../../material-4/Editor/StrikethroughS.Local.png) |




## StrikethroughS

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StrikethroughS
include('material-4/Editor/StrikethroughS')

' renders the element
StrikethroughS('StrikethroughS', 'Strikethrough S', 'an optional tech label')
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

' loads the Item which embeds the element StrikethroughS
include('material-4/Editor/StrikethroughS')

' renders the element
StrikethroughS('StrikethroughS', 'Strikethrough S', 'an optional tech label')
@enduml
```

