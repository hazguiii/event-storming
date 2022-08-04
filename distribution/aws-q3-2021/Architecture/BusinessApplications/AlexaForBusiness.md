# AlexaForBusiness


```text
aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness
```

```text
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')
```



| Illustration | AlexaForBusiness | AlexaForBusinessCard | AlexaForBusinessGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness.png) | ![illustration for AlexaForBusiness](../../../aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness.Local.png) | ![illustration for AlexaForBusinessCard](../../../aws-q3-2021/Architecture/BusinessApplications/AlexaForBusinessCard.Local.png) | ![illustration for AlexaForBusinessGroup](../../../aws-q3-2021/Architecture/BusinessApplications/AlexaForBusinessGroup.Local.png) |




## AlexaForBusiness

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AlexaForBusiness
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusiness('AlexaForBusiness', 'Alexa For Business', 'an optional tech label')
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

' loads the Item which embeds the element AlexaForBusiness
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusiness('AlexaForBusiness', 'Alexa For Business', 'an optional tech label')
@enduml
```

## AlexaForBusinessCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AlexaForBusinessCard
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusinessCard('AlexaForBusinessCard', 'Alexa For Business Card', 'an optional description')
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

' loads the Item which embeds the element AlexaForBusinessCard
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusinessCard('AlexaForBusinessCard', 'Alexa For Business Card', 'an optional description')
@enduml
```

## AlexaForBusinessGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AlexaForBusinessGroup
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusinessGroup('AlexaForBusinessGroup', 'Alexa For Business Group', 'an optional tech label') {
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

' loads the Item which embeds the element AlexaForBusinessGroup
include('aws-q3-2021/Architecture/BusinessApplications/AlexaForBusiness')

' renders the element
AlexaForBusinessGroup('AlexaForBusinessGroup', 'Alexa For Business Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

