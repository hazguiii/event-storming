# Tensorflow


```text
simpleicons-6/T/Tensorflow
```

```text
include('simpleicons-6/T/Tensorflow')
```



| Illustration | Tensorflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tensorflow.png) | ![illustration for Tensorflow](../../simpleicons-6/T/Tensorflow.Local.png) |




## Tensorflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tensorflow
include('simpleicons-6/T/Tensorflow')

' renders the element
Tensorflow('Tensorflow', 'Tensorflow', 'an optional tech label')
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

' loads the Item which embeds the element Tensorflow
include('simpleicons-6/T/Tensorflow')

' renders the element
Tensorflow('Tensorflow', 'Tensorflow', 'an optional tech label')
@enduml
```

