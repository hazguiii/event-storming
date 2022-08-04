# Robotics


```text
aws-q3-2021/Category/Robotics
```

```text
include('aws-q3-2021/Category/Robotics')
```



| Illustration | Robotics | RoboticsCard | RoboticsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q3-2021/Category/Robotics.png) | ![illustration for Robotics](../../aws-q3-2021/Category/Robotics.Local.png) | ![illustration for RoboticsCard](../../aws-q3-2021/Category/RoboticsCard.Local.png) | ![illustration for RoboticsGroup](../../aws-q3-2021/Category/RoboticsGroup.Local.png) |




## Robotics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Robotics
include('aws-q3-2021/Category/Robotics')

' renders the element
Robotics('Robotics', 'Robotics', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element Robotics
include('aws-q3-2021/Category/Robotics')

' renders the element
Robotics('Robotics', 'Robotics', 'an optional tech label')
@enduml
```

## RoboticsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element RoboticsCard
include('aws-q3-2021/Category/Robotics')

' renders the element
RoboticsCard('RoboticsCard', 'Robotics Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element RoboticsCard
include('aws-q3-2021/Category/Robotics')

' renders the element
RoboticsCard('RoboticsCard', 'Robotics Card', 'an optional description')
@enduml
```

## RoboticsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element RoboticsGroup
include('aws-q3-2021/Category/Robotics')

' renders the element
RoboticsGroup('RoboticsGroup', 'Robotics Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element RoboticsGroup
include('aws-q3-2021/Category/Robotics')

' renders the element
RoboticsGroup('RoboticsGroup', 'Robotics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

