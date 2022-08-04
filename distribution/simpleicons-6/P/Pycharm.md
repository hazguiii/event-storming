# Pycharm


```text
simpleicons-6/P/Pycharm
```

```text
include('simpleicons-6/P/Pycharm')
```



| Illustration | Pycharm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pycharm.png) | ![illustration for Pycharm](../../simpleicons-6/P/Pycharm.Local.png) |




## Pycharm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pycharm
include('simpleicons-6/P/Pycharm')

' renders the element
Pycharm('Pycharm', 'Pycharm', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pycharm
include('simpleicons-6/P/Pycharm')

' renders the element
Pycharm('Pycharm', 'Pycharm', 'an optional tech label')
@enduml
```

