# SendToMobile


```text
material-4/Device/SendToMobile
```

```text
include('material-4/Device/SendToMobile')
```



| Illustration | SendToMobile |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SendToMobile.png) | ![illustration for SendToMobile](../../material-4/Device/SendToMobile.Local.png) |




## SendToMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SendToMobile
include('material-4/Device/SendToMobile')

' renders the element
SendToMobile('SendToMobile', 'Send To Mobile', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SendToMobile
include('material-4/Device/SendToMobile')

' renders the element
SendToMobile('SendToMobile', 'Send To Mobile', 'an optional tech label')
@enduml
```

