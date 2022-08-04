# ServiceAzureNetAppFiles


```text
azure-4/Item/Storage/ServiceAzureNetAppFiles
```

```text
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')
```



| Illustration | ServiceAzureNetAppFiles | ServiceAzureNetAppFilesCard | ServiceAzureNetAppFilesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceAzureNetAppFiles.png) | ![illustration for ServiceAzureNetAppFiles](../../../azure-4/Item/Storage/ServiceAzureNetAppFiles.Local.png) | ![illustration for ServiceAzureNetAppFilesCard](../../../azure-4/Item/Storage/ServiceAzureNetAppFilesCard.Local.png) | ![illustration for ServiceAzureNetAppFilesGroup](../../../azure-4/Item/Storage/ServiceAzureNetAppFilesGroup.Local.png) |




## ServiceAzureNetAppFiles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFiles
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFiles('ServiceAzureNetAppFiles', 'Service Azure Net App Files', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFiles
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFiles('ServiceAzureNetAppFiles', 'Service Azure Net App Files', 'an optional tech label')
@enduml
```

## ServiceAzureNetAppFilesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFilesCard
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFilesCard('ServiceAzureNetAppFilesCard', 'Service Azure Net App Files Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFilesCard
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFilesCard('ServiceAzureNetAppFilesCard', 'Service Azure Net App Files Card', 'an optional description')
@enduml
```

## ServiceAzureNetAppFilesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFilesGroup
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFilesGroup('ServiceAzureNetAppFilesGroup', 'Service Azure Net App Files Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureNetAppFilesGroup
include('azure-4/Item/Storage/ServiceAzureNetAppFiles')

' renders the element
ServiceAzureNetAppFilesGroup('ServiceAzureNetAppFilesGroup', 'Service Azure Net App Files Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

