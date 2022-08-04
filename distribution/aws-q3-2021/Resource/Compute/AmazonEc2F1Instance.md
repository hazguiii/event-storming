# AmazonEc2F1Instance


```text
aws-q3-2021/Resource/Compute/AmazonEc2F1Instance
```

```text
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')
```



| Illustration | AmazonEc2F1Instance | AmazonEc2F1InstanceCard | AmazonEc2F1InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/Compute/AmazonEc2F1Instance.png) | ![illustration for AmazonEc2F1Instance](../../../aws-q3-2021/Resource/Compute/AmazonEc2F1Instance.Local.png) | ![illustration for AmazonEc2F1InstanceCard](../../../aws-q3-2021/Resource/Compute/AmazonEc2F1InstanceCard.Local.png) | ![illustration for AmazonEc2F1InstanceGroup](../../../aws-q3-2021/Resource/Compute/AmazonEc2F1InstanceGroup.Local.png) |




## AmazonEc2F1Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2F1Instance
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1Instance('AmazonEc2F1Instance', 'Amazon Ec2 F1 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2F1Instance
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1Instance('AmazonEc2F1Instance', 'Amazon Ec2 F1 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2F1InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2F1InstanceCard
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1InstanceCard('AmazonEc2F1InstanceCard', 'Amazon Ec2 F1 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2F1InstanceCard
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1InstanceCard('AmazonEc2F1InstanceCard', 'Amazon Ec2 F1 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2F1InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2F1InstanceGroup
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1InstanceGroup('AmazonEc2F1InstanceGroup', 'Amazon Ec2 F1 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2F1InstanceGroup
include('aws-q3-2021/Resource/Compute/AmazonEc2F1Instance')

' renders the element
AmazonEc2F1InstanceGroup('AmazonEc2F1InstanceGroup', 'Amazon Ec2 F1 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

