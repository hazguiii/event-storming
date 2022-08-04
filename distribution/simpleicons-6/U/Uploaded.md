# Uploaded


```text
simpleicons-6/U/Uploaded
```

```text
include('simpleicons-6/U/Uploaded')
```



| Illustration | Uploaded |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Uploaded.png) | ![illustration for Uploaded](../../simpleicons-6/U/Uploaded.Local.png) |




## Uploaded

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Uploaded
include('simpleicons-6/U/Uploaded')

' renders the element
Uploaded('Uploaded', 'Uploaded', 'an optional tech label')
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

' loads the Item which embeds the element Uploaded
include('simpleicons-6/U/Uploaded')

' renders the element
Uploaded('Uploaded', 'Uploaded', 'an optional tech label')
@enduml
```

