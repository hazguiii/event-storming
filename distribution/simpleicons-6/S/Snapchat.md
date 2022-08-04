# Snapchat


```text
simpleicons-6/S/Snapchat
```

```text
include('simpleicons-6/S/Snapchat')
```



| Illustration | Snapchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Snapchat.png) | ![illustration for Snapchat](../../simpleicons-6/S/Snapchat.Local.png) |




## Snapchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Snapchat
include('simpleicons-6/S/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label')
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

' loads the Item which embeds the element Snapchat
include('simpleicons-6/S/Snapchat')

' renders the element
Snapchat('Snapchat', 'Snapchat', 'an optional tech label')
@enduml
```

