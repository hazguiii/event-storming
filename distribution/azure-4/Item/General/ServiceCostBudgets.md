# ServiceCostBudgets


```text
azure-4/Item/General/ServiceCostBudgets
```

```text
include('azure-4/Item/General/ServiceCostBudgets')
```



| Illustration | ServiceCostBudgets | ServiceCostBudgetsCard | ServiceCostBudgetsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceCostBudgets.png) | ![illustration for ServiceCostBudgets](../../../azure-4/Item/General/ServiceCostBudgets.Local.png) | ![illustration for ServiceCostBudgetsCard](../../../azure-4/Item/General/ServiceCostBudgetsCard.Local.png) | ![illustration for ServiceCostBudgetsGroup](../../../azure-4/Item/General/ServiceCostBudgetsGroup.Local.png) |




## ServiceCostBudgets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostBudgets
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgets('ServiceCostBudgets', 'Service Cost Budgets', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCostBudgets
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgets('ServiceCostBudgets', 'Service Cost Budgets', 'an optional tech label')
@enduml
```

## ServiceCostBudgetsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostBudgetsCard
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgetsCard('ServiceCostBudgetsCard', 'Service Cost Budgets Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCostBudgetsCard
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgetsCard('ServiceCostBudgetsCard', 'Service Cost Budgets Card', 'an optional description')
@enduml
```

## ServiceCostBudgetsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostBudgetsGroup
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgetsGroup('ServiceCostBudgetsGroup', 'Service Cost Budgets Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCostBudgetsGroup
include('azure-4/Item/General/ServiceCostBudgets')

' renders the element
ServiceCostBudgetsGroup('ServiceCostBudgetsGroup', 'Service Cost Budgets Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

