# ApacheMxNetOnAws


```text
aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws
```

```text
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')
```



| Illustration | ApacheMxNetOnAws | ApacheMxNetOnAwsCard | ApacheMxNetOnAwsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws.png) | ![illustration for ApacheMxNetOnAws](../../../aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws.Local.png) | ![illustration for ApacheMxNetOnAwsCard](../../../aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAwsCard.Local.png) | ![illustration for ApacheMxNetOnAwsGroup](../../../aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAwsGroup.Local.png) |




## ApacheMxNetOnAws

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ApacheMxNetOnAws
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAws('ApacheMxNetOnAws', 'Apache Mx Net On Aws', 'an optional tech label')
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

' loads the Item which embeds the element ApacheMxNetOnAws
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAws('ApacheMxNetOnAws', 'Apache Mx Net On Aws', 'an optional tech label')
@enduml
```

## ApacheMxNetOnAwsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ApacheMxNetOnAwsCard
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAwsCard('ApacheMxNetOnAwsCard', 'Apache Mx Net On Aws Card', 'an optional description')
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

' loads the Item which embeds the element ApacheMxNetOnAwsCard
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAwsCard('ApacheMxNetOnAwsCard', 'Apache Mx Net On Aws Card', 'an optional description')
@enduml
```

## ApacheMxNetOnAwsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element ApacheMxNetOnAwsGroup
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAwsGroup('ApacheMxNetOnAwsGroup', 'Apache Mx Net On Aws Group', 'an optional tech label') {
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

' loads the Item which embeds the element ApacheMxNetOnAwsGroup
include('aws-q3-2021/Architecture/MachineLearning/ApacheMxNetOnAws')

' renders the element
ApacheMxNetOnAwsGroup('ApacheMxNetOnAwsGroup', 'Apache Mx Net On Aws Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

