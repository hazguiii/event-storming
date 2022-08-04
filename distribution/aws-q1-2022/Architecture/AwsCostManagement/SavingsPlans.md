# SavingsPlans


```text
aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans
```

```text
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')
```



| Illustration | SavingsPlans | SavingsPlansCard | SavingsPlansGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans.png) | ![illustration for SavingsPlans](../../../aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans.Local.png) | ![illustration for SavingsPlansCard](../../../aws-q1-2022/Architecture/AwsCostManagement/SavingsPlansCard.Local.png) | ![illustration for SavingsPlansGroup](../../../aws-q1-2022/Architecture/AwsCostManagement/SavingsPlansGroup.Local.png) |




## SavingsPlans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlans
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlans('SavingsPlans', 'Savings Plans', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlans
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlans('SavingsPlans', 'Savings Plans', 'an optional tech label')
@enduml
```

## SavingsPlansCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlansCard
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlansCard('SavingsPlansCard', 'Savings Plans Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlansCard
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlansCard('SavingsPlansCard', 'Savings Plans Card', 'an optional description')
@enduml
```

## SavingsPlansGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlansGroup
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlansGroup('SavingsPlansGroup', 'Savings Plans Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element SavingsPlansGroup
include('aws-q1-2022/Architecture/AwsCostManagement/SavingsPlans')

' renders the element
SavingsPlansGroup('SavingsPlansGroup', 'Savings Plans Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

