# Opencv


```text
simpleicons-6/O/Opencv
```

```text
include('simpleicons-6/O/Opencv')
```



| Illustration | Opencv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opencv.png) | ![illustration for Opencv](../../simpleicons-6/O/Opencv.Local.png) |




## Opencv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opencv
include('simpleicons-6/O/Opencv')

' renders the element
Opencv('Opencv', 'Opencv', 'an optional tech label')
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

' loads the Item which embeds the element Opencv
include('simpleicons-6/O/Opencv')

' renders the element
Opencv('Opencv', 'Opencv', 'an optional tech label')
@enduml
```

