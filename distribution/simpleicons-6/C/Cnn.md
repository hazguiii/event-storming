# Cnn


```text
simpleicons-6/C/Cnn
```

```text
include('simpleicons-6/C/Cnn')
```



| Illustration | Cnn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cnn.png) | ![illustration for Cnn](../../simpleicons-6/C/Cnn.Local.png) |




## Cnn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cnn
include('simpleicons-6/C/Cnn')

' renders the element
Cnn('Cnn', 'Cnn', 'an optional tech label')
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

' loads the Item which embeds the element Cnn
include('simpleicons-6/C/Cnn')

' renders the element
Cnn('Cnn', 'Cnn', 'an optional tech label')
@enduml
```

