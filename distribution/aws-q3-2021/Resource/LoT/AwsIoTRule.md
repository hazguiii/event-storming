# AwsIoTRule


```text
aws-q3-2021/Resource/LoT/AwsIoTRule
```

```text
include('aws-q3-2021/Resource/LoT/AwsIoTRule')
```



| Illustration | AwsIoTRule | AwsIoTRuleCard | AwsIoTRuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/LoT/AwsIoTRule.png) | ![illustration for AwsIoTRule](../../../aws-q3-2021/Resource/LoT/AwsIoTRule.Local.png) | ![illustration for AwsIoTRuleCard](../../../aws-q3-2021/Resource/LoT/AwsIoTRuleCard.Local.png) | ![illustration for AwsIoTRuleGroup](../../../aws-q3-2021/Resource/LoT/AwsIoTRuleGroup.Local.png) |




## AwsIoTRule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTRule
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRule('AwsIoTRule', 'Aws Io T Rule', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTRule
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRule('AwsIoTRule', 'Aws Io T Rule', 'an optional tech label')
@enduml
```

## AwsIoTRuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTRuleCard
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRuleCard('AwsIoTRuleCard', 'Aws Io T Rule Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTRuleCard
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRuleCard('AwsIoTRuleCard', 'Aws Io T Rule Card', 'an optional description')
@enduml
```

## AwsIoTRuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTRuleGroup
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRuleGroup('AwsIoTRuleGroup', 'Aws Io T Rule Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTRuleGroup
include('aws-q3-2021/Resource/LoT/AwsIoTRule')

' renders the element
AwsIoTRuleGroup('AwsIoTRuleGroup', 'Aws Io T Rule Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

