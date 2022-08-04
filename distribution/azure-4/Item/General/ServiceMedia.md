# ServiceMedia


```text
azure-4/Item/General/ServiceMedia
```

```text
include('azure-4/Item/General/ServiceMedia')
```



| Illustration | ServiceMedia | ServiceMediaCard | ServiceMediaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceMedia.png) | ![illustration for ServiceMedia](../../../azure-4/Item/General/ServiceMedia.Local.png) | ![illustration for ServiceMediaCard](../../../azure-4/Item/General/ServiceMediaCard.Local.png) | ![illustration for ServiceMediaGroup](../../../azure-4/Item/General/ServiceMediaGroup.Local.png) |




## ServiceMedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMedia
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMedia('ServiceMedia', 'Service Media', 'an optional tech label')
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

' loads the Item which embeds the element ServiceMedia
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMedia('ServiceMedia', 'Service Media', 'an optional tech label')
@enduml
```

## ServiceMediaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMediaCard
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMediaCard('ServiceMediaCard', 'Service Media Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMediaCard
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMediaCard('ServiceMediaCard', 'Service Media Card', 'an optional description')
@enduml
```

## ServiceMediaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMediaGroup
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMediaGroup('ServiceMediaGroup', 'Service Media Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMediaGroup
include('azure-4/Item/General/ServiceMedia')

' renders the element
ServiceMediaGroup('ServiceMediaGroup', 'Service Media Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

