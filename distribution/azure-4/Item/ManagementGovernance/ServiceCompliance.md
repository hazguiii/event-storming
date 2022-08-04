# ServiceCompliance


```text
azure-4/Item/ManagementGovernance/ServiceCompliance
```

```text
include('azure-4/Item/ManagementGovernance/ServiceCompliance')
```



| Illustration | ServiceCompliance | ServiceComplianceCard | ServiceComplianceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/ManagementGovernance/ServiceCompliance.png) | ![illustration for ServiceCompliance](../../../azure-4/Item/ManagementGovernance/ServiceCompliance.Local.png) | ![illustration for ServiceComplianceCard](../../../azure-4/Item/ManagementGovernance/ServiceComplianceCard.Local.png) | ![illustration for ServiceComplianceGroup](../../../azure-4/Item/ManagementGovernance/ServiceComplianceGroup.Local.png) |




## ServiceCompliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCompliance
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceCompliance('ServiceCompliance', 'Service Compliance', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCompliance
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceCompliance('ServiceCompliance', 'Service Compliance', 'an optional tech label')
@enduml
```

## ServiceComplianceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceComplianceCard
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceComplianceCard('ServiceComplianceCard', 'Service Compliance Card', 'an optional description')
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

' loads the Item which embeds the element ServiceComplianceCard
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceComplianceCard('ServiceComplianceCard', 'Service Compliance Card', 'an optional description')
@enduml
```

## ServiceComplianceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceComplianceGroup
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceComplianceGroup('ServiceComplianceGroup', 'Service Compliance Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceComplianceGroup
include('azure-4/Item/ManagementGovernance/ServiceCompliance')

' renders the element
ServiceComplianceGroup('ServiceComplianceGroup', 'Service Compliance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

