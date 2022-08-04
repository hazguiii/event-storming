# AwsShield


```text
aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield
```

```text
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')
```



| Illustration | AwsShield | AwsShieldCard | AwsShieldGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield.png) | ![illustration for AwsShield](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield.Local.png) | ![illustration for AwsShieldCard](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShieldCard.Local.png) | ![illustration for AwsShieldGroup](../../../aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShieldGroup.Local.png) |




## AwsShield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsShield
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShield('AwsShield', 'Aws Shield', 'an optional tech label')
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

' loads the Item which embeds the element AwsShield
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShield('AwsShield', 'Aws Shield', 'an optional tech label')
@enduml
```

## AwsShieldCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsShieldCard
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShieldCard('AwsShieldCard', 'Aws Shield Card', 'an optional description')
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

' loads the Item which embeds the element AwsShieldCard
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShieldCard('AwsShieldCard', 'Aws Shield Card', 'an optional description')
@enduml
```

## AwsShieldGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsShieldGroup
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShieldGroup('AwsShieldGroup', 'Aws Shield Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsShieldGroup
include('aws-q3-2021/Architecture/SecurityIdentityCompliance/AwsShield')

' renders the element
AwsShieldGroup('AwsShieldGroup', 'Aws Shield Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

