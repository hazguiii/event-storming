# ServiceBacklog


```text
azure-4/Item/General/ServiceBacklog
```

```text
include('azure-4/Item/General/ServiceBacklog')
```



| Illustration | ServiceBacklog | ServiceBacklogCard | ServiceBacklogGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceBacklog.png) | ![illustration for ServiceBacklog](../../../azure-4/Item/General/ServiceBacklog.Local.png) | ![illustration for ServiceBacklogCard](../../../azure-4/Item/General/ServiceBacklogCard.Local.png) | ![illustration for ServiceBacklogGroup](../../../azure-4/Item/General/ServiceBacklogGroup.Local.png) |




## ServiceBacklog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceBacklog
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklog('ServiceBacklog', 'Service Backlog', 'an optional tech label')
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

' loads the Item which embeds the element ServiceBacklog
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklog('ServiceBacklog', 'Service Backlog', 'an optional tech label')
@enduml
```

## ServiceBacklogCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceBacklogCard
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklogCard('ServiceBacklogCard', 'Service Backlog Card', 'an optional description')
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

' loads the Item which embeds the element ServiceBacklogCard
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklogCard('ServiceBacklogCard', 'Service Backlog Card', 'an optional description')
@enduml
```

## ServiceBacklogGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceBacklogGroup
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklogGroup('ServiceBacklogGroup', 'Service Backlog Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceBacklogGroup
include('azure-4/Item/General/ServiceBacklog')

' renders the element
ServiceBacklogGroup('ServiceBacklogGroup', 'Service Backlog Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

