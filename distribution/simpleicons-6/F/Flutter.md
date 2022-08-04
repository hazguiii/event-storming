# Flutter


```text
simpleicons-6/F/Flutter
```

```text
include('simpleicons-6/F/Flutter')
```



| Illustration | Flutter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Flutter.png) | ![illustration for Flutter](../../simpleicons-6/F/Flutter.Local.png) |




## Flutter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Flutter
include('simpleicons-6/F/Flutter')

' renders the element
Flutter('Flutter', 'Flutter', 'an optional tech label')
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

' loads the Item which embeds the element Flutter
include('simpleicons-6/F/Flutter')

' renders the element
Flutter('Flutter', 'Flutter', 'an optional tech label')
@enduml
```

