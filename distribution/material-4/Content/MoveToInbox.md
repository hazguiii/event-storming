# MoveToInbox


```text
material-4/Content/MoveToInbox
```

```text
include('material-4/Content/MoveToInbox')
```



| Illustration | MoveToInbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/MoveToInbox.png) | ![illustration for MoveToInbox](../../material-4/Content/MoveToInbox.Local.png) |




## MoveToInbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MoveToInbox
include('material-4/Content/MoveToInbox')

' renders the element
MoveToInbox('MoveToInbox', 'Move To Inbox', 'an optional tech label')
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

' loads the Item which embeds the element MoveToInbox
include('material-4/Content/MoveToInbox')

' renders the element
MoveToInbox('MoveToInbox', 'Move To Inbox', 'an optional tech label')
@enduml
```
