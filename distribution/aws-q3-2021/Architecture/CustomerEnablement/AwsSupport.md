# AwsSupport


```text
aws-q3-2021/Architecture/CustomerEnablement/AwsSupport
```

```text
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')
```



| Illustration | AwsSupport | AwsSupportCard | AwsSupportGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsSupport.png) | ![illustration for AwsSupport](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsSupport.Local.png) | ![illustration for AwsSupportCard](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsSupportCard.Local.png) | ![illustration for AwsSupportGroup](../../../aws-q3-2021/Architecture/CustomerEnablement/AwsSupportGroup.Local.png) |




## AwsSupport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSupport
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupport('AwsSupport', 'Aws Support', 'an optional tech label')
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

' loads the Item which embeds the element AwsSupport
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupport('AwsSupport', 'Aws Support', 'an optional tech label')
@enduml
```

## AwsSupportCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSupportCard
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupportCard('AwsSupportCard', 'Aws Support Card', 'an optional description')
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

' loads the Item which embeds the element AwsSupportCard
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupportCard('AwsSupportCard', 'Aws Support Card', 'an optional description')
@enduml
```

## AwsSupportGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSupportGroup
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupportGroup('AwsSupportGroup', 'Aws Support Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSupportGroup
include('aws-q3-2021/Architecture/CustomerEnablement/AwsSupport')

' renders the element
AwsSupportGroup('AwsSupportGroup', 'Aws Support Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

