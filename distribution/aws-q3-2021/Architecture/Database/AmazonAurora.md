# AmazonAurora


```text
aws-q3-2021/Architecture/Database/AmazonAurora
```

```text
include('aws-q3-2021/Architecture/Database/AmazonAurora')
```



| Illustration | AmazonAurora | AmazonAuroraCard | AmazonAuroraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Database/AmazonAurora.png) | ![illustration for AmazonAurora](../../../aws-q3-2021/Architecture/Database/AmazonAurora.Local.png) | ![illustration for AmazonAuroraCard](../../../aws-q3-2021/Architecture/Database/AmazonAuroraCard.Local.png) | ![illustration for AmazonAuroraGroup](../../../aws-q3-2021/Architecture/Database/AmazonAuroraGroup.Local.png) |




## AmazonAurora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAurora
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAurora('AmazonAurora', 'Amazon Aurora', 'an optional tech label')
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

' loads the Item which embeds the element AmazonAurora
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAurora('AmazonAurora', 'Amazon Aurora', 'an optional tech label')
@enduml
```

## AmazonAuroraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraCard
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAuroraCard('AmazonAuroraCard', 'Amazon Aurora Card', 'an optional description')
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

' loads the Item which embeds the element AmazonAuroraCard
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAuroraCard('AmazonAuroraCard', 'Amazon Aurora Card', 'an optional description')
@enduml
```

## AmazonAuroraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonAuroraGroup
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAuroraGroup('AmazonAuroraGroup', 'Amazon Aurora Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonAuroraGroup
include('aws-q3-2021/Architecture/Database/AmazonAurora')

' renders the element
AmazonAuroraGroup('AmazonAuroraGroup', 'Amazon Aurora Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

