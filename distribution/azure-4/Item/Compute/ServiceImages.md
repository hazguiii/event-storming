# ServiceImages


```text
azure-4/Item/Compute/ServiceImages
```

```text
include('azure-4/Item/Compute/ServiceImages')
```



| Illustration | ServiceImages | ServiceImagesCard | ServiceImagesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Compute/ServiceImages.png) | ![illustration for ServiceImages](../../../azure-4/Item/Compute/ServiceImages.Local.png) | ![illustration for ServiceImagesCard](../../../azure-4/Item/Compute/ServiceImagesCard.Local.png) | ![illustration for ServiceImagesGroup](../../../azure-4/Item/Compute/ServiceImagesGroup.Local.png) |




## ServiceImages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImages
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImages('ServiceImages', 'Service Images', 'an optional tech label')
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

' loads the Item which embeds the element ServiceImages
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImages('ServiceImages', 'Service Images', 'an optional tech label')
@enduml
```

## ServiceImagesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImagesCard
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImagesCard('ServiceImagesCard', 'Service Images Card', 'an optional description')
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

' loads the Item which embeds the element ServiceImagesCard
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImagesCard('ServiceImagesCard', 'Service Images Card', 'an optional description')
@enduml
```

## ServiceImagesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceImagesGroup
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImagesGroup('ServiceImagesGroup', 'Service Images Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceImagesGroup
include('azure-4/Item/Compute/ServiceImages')

' renders the element
ServiceImagesGroup('ServiceImagesGroup', 'Service Images Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

