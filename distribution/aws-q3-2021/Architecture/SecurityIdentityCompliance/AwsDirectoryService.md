# AwsDirectoryService


```text
aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService
```

```text
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')
```



| Illustration | AwsDirectoryService | AwsDirectoryServiceCard | AwsDirectoryServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService.png) | ![illustration for AwsDirectoryService](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService.Local.png) | ![illustration for AwsDirectoryServiceCard](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryServiceCard.Local.png) | ![illustration for AwsDirectoryServiceGroup](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryServiceGroup.Local.png) |




## AwsDirectoryService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDirectoryService
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryService('AwsDirectoryService', 'Aws Directory Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsDirectoryService
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryService('AwsDirectoryService', 'Aws Directory Service', 'an optional tech label')
@enduml
```

## AwsDirectoryServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDirectoryServiceCard
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryServiceCard('AwsDirectoryServiceCard', 'Aws Directory Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsDirectoryServiceCard
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryServiceCard('AwsDirectoryServiceCard', 'Aws Directory Service Card', 'an optional description')
@enduml
```

## AwsDirectoryServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDirectoryServiceGroup
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryServiceGroup('AwsDirectoryServiceGroup', 'Aws Directory Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDirectoryServiceGroup
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsDirectoryService')

' renders the element
AwsDirectoryServiceGroup('AwsDirectoryServiceGroup', 'Aws Directory Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

