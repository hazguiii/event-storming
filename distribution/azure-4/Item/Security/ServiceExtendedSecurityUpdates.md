# ServiceExtendedSecurityUpdates


```text
azure-4/Item/Security/ServiceExtendedSecurityUpdates
```

```text
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')
```



| Illustration | ServiceExtendedSecurityUpdates | ServiceExtendedSecurityUpdatesCard | ServiceExtendedSecurityUpdatesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Security/ServiceExtendedSecurityUpdates.png) | ![illustration for ServiceExtendedSecurityUpdates](../../../azure-4/Item/Security/ServiceExtendedSecurityUpdates.Local.png) | ![illustration for ServiceExtendedSecurityUpdatesCard](../../../azure-4/Item/Security/ServiceExtendedSecurityUpdatesCard.Local.png) | ![illustration for ServiceExtendedSecurityUpdatesGroup](../../../azure-4/Item/Security/ServiceExtendedSecurityUpdatesGroup.Local.png) |




## ServiceExtendedSecurityUpdates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceExtendedSecurityUpdates
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdates('ServiceExtendedSecurityUpdates', 'Service Extended Security Updates', 'an optional tech label')
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

' loads the Item which embeds the element ServiceExtendedSecurityUpdates
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdates('ServiceExtendedSecurityUpdates', 'Service Extended Security Updates', 'an optional tech label')
@enduml
```

## ServiceExtendedSecurityUpdatesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceExtendedSecurityUpdatesCard
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdatesCard('ServiceExtendedSecurityUpdatesCard', 'Service Extended Security Updates Card', 'an optional description')
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

' loads the Item which embeds the element ServiceExtendedSecurityUpdatesCard
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdatesCard('ServiceExtendedSecurityUpdatesCard', 'Service Extended Security Updates Card', 'an optional description')
@enduml
```

## ServiceExtendedSecurityUpdatesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceExtendedSecurityUpdatesGroup
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdatesGroup('ServiceExtendedSecurityUpdatesGroup', 'Service Extended Security Updates Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceExtendedSecurityUpdatesGroup
include('azure-4/Item/Security/ServiceExtendedSecurityUpdates')

' renders the element
ServiceExtendedSecurityUpdatesGroup('ServiceExtendedSecurityUpdatesGroup', 'Service Extended Security Updates Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

