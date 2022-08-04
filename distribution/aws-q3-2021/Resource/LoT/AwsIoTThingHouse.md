# AwsIoTThingHouse


```text
aws-q3-2021/Resource/LoT/AwsIoTThingHouse
```

```text
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')
```



| Illustration | AwsIoTThingHouse | AwsIoTThingHouseCard | AwsIoTThingHouseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/LoT/AwsIoTThingHouse.png) | ![illustration for AwsIoTThingHouse](../../../aws-q3-2021/Resource/LoT/AwsIoTThingHouse.Local.png) | ![illustration for AwsIoTThingHouseCard](../../../aws-q3-2021/Resource/LoT/AwsIoTThingHouseCard.Local.png) | ![illustration for AwsIoTThingHouseGroup](../../../aws-q3-2021/Resource/LoT/AwsIoTThingHouseGroup.Local.png) |




## AwsIoTThingHouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingHouse
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouse('AwsIoTThingHouse', 'Aws Io T Thing House', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTThingHouse
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouse('AwsIoTThingHouse', 'Aws Io T Thing House', 'an optional tech label')
@enduml
```

## AwsIoTThingHouseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingHouseCard
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouseCard('AwsIoTThingHouseCard', 'Aws Io T Thing House Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTThingHouseCard
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouseCard('AwsIoTThingHouseCard', 'Aws Io T Thing House Card', 'an optional description')
@enduml
```

## AwsIoTThingHouseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTThingHouseGroup
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouseGroup('AwsIoTThingHouseGroup', 'Aws Io T Thing House Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTThingHouseGroup
include('aws-q3-2021/Resource/LoT/AwsIoTThingHouse')

' renders the element
AwsIoTThingHouseGroup('AwsIoTThingHouseGroup', 'Aws Io T Thing House Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

