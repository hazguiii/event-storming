# Visualstudiocode


```text
simpleicons-6/V/Visualstudiocode
```

```text
include('simpleicons-6/V/Visualstudiocode')
```



| Illustration | Visualstudiocode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Visualstudiocode.png) | ![illustration for Visualstudiocode](../../simpleicons-6/V/Visualstudiocode.Local.png) |




## Visualstudiocode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Visualstudiocode
include('simpleicons-6/V/Visualstudiocode')

' renders the element
Visualstudiocode('Visualstudiocode', 'Visualstudiocode', 'an optional tech label')
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

' loads the Item which embeds the element Visualstudiocode
include('simpleicons-6/V/Visualstudiocode')

' renders the element
Visualstudiocode('Visualstudiocode', 'Visualstudiocode', 'an optional tech label')
@enduml
```

