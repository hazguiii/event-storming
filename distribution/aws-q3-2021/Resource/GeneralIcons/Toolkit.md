# Toolkit


```text
aws-q3-2021/Resource/GeneralIcons/Toolkit
```

```text
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')
```



| Illustration | Toolkit | ToolkitCard | ToolkitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/GeneralIcons/Toolkit.png) | ![illustration for Toolkit](../../../aws-q3-2021/Resource/GeneralIcons/Toolkit.Local.png) | ![illustration for ToolkitCard](../../../aws-q3-2021/Resource/GeneralIcons/ToolkitCard.Local.png) | ![illustration for ToolkitGroup](../../../aws-q3-2021/Resource/GeneralIcons/ToolkitGroup.Local.png) |




## Toolkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Toolkit
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
Toolkit('Toolkit', 'Toolkit', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Toolkit
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
Toolkit('Toolkit', 'Toolkit', 'an optional tech label')
@enduml
```

## ToolkitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ToolkitCard
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
ToolkitCard('ToolkitCard', 'Toolkit Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ToolkitCard
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
ToolkitCard('ToolkitCard', 'Toolkit Card', 'an optional description')
@enduml
```

## ToolkitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ToolkitGroup
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
ToolkitGroup('ToolkitGroup', 'Toolkit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ToolkitGroup
include('aws-q3-2021/Resource/GeneralIcons/Toolkit')

' renders the element
ToolkitGroup('ToolkitGroup', 'Toolkit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

