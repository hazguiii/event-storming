# LightbulbOutline


```text
material-4/Action/LightbulbOutline
```

```text
include('material-4/Action/LightbulbOutline')
```



| Illustration | LightbulbOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LightbulbOutline.png) | ![illustration for LightbulbOutline](../../material-4/Action/LightbulbOutline.Local.png) |




## LightbulbOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LightbulbOutline
include('material-4/Action/LightbulbOutline')

' renders the element
LightbulbOutline('LightbulbOutline', 'Lightbulb Outline', 'an optional tech label')
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

' loads the Item which embeds the element LightbulbOutline
include('material-4/Action/LightbulbOutline')

' renders the element
LightbulbOutline('LightbulbOutline', 'Lightbulb Outline', 'an optional tech label')
@enduml
```

