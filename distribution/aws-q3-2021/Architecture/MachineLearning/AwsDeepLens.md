# AwsDeepLens


```text
aws-q3-2021/Architecture/MachineLearning/AwsDeepLens
```

```text
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')
```



| Illustration | AwsDeepLens | AwsDeepLensCard | AwsDeepLensGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MachineLearning/AwsDeepLens.png) | ![illustration for AwsDeepLens](../../../aws-q3-2021/Architecture/MachineLearning/AwsDeepLens.Local.png) | ![illustration for AwsDeepLensCard](../../../aws-q3-2021/Architecture/MachineLearning/AwsDeepLensCard.Local.png) | ![illustration for AwsDeepLensGroup](../../../aws-q3-2021/Architecture/MachineLearning/AwsDeepLensGroup.Local.png) |




## AwsDeepLens

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDeepLens
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLens('AwsDeepLens', 'Aws Deep Lens', 'an optional tech label')
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

' loads the Item which embeds the element AwsDeepLens
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLens('AwsDeepLens', 'Aws Deep Lens', 'an optional tech label')
@enduml
```

## AwsDeepLensCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDeepLensCard
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLensCard('AwsDeepLensCard', 'Aws Deep Lens Card', 'an optional description')
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

' loads the Item which embeds the element AwsDeepLensCard
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLensCard('AwsDeepLensCard', 'Aws Deep Lens Card', 'an optional description')
@enduml
```

## AwsDeepLensGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDeepLensGroup
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLensGroup('AwsDeepLensGroup', 'Aws Deep Lens Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDeepLensGroup
include('aws-q3-2021/Architecture/MachineLearning/AwsDeepLens')

' renders the element
AwsDeepLensGroup('AwsDeepLensGroup', 'Aws Deep Lens Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

