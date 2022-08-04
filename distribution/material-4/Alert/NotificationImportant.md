# NotificationImportant


```text
material-4/Alert/NotificationImportant
```

```text
include('material-4/Alert/NotificationImportant')
```



| Illustration | NotificationImportant |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/NotificationImportant.png) | ![illustration for NotificationImportant](../../material-4/Alert/NotificationImportant.Local.png) |




## NotificationImportant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationImportant
include('material-4/Alert/NotificationImportant')

' renders the element
NotificationImportant('NotificationImportant', 'Notification Important', 'an optional tech label')
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

' loads the Item which embeds the element NotificationImportant
include('material-4/Alert/NotificationImportant')

' renders the element
NotificationImportant('NotificationImportant', 'Notification Important', 'an optional tech label')
@enduml
```

