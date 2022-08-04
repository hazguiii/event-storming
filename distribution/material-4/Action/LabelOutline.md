# LabelOutline


```text
material-4/Action/LabelOutline
```

```text
include('material-4/Action/LabelOutline')
```



| Illustration | LabelOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/LabelOutline.png) | ![illustration for LabelOutline](../../material-4/Action/LabelOutline.Local.png) |




## LabelOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LabelOutline
include('material-4/Action/LabelOutline')

' renders the element
LabelOutline('LabelOutline', 'Label Outline', 'an optional tech label')
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

' loads the Item which embeds the element LabelOutline
include('material-4/Action/LabelOutline')

' renders the element
LabelOutline('LabelOutline', 'Label Outline', 'an optional tech label')
@enduml
```

