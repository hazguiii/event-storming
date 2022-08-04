# Cirrusci


```text
simpleicons-6/C/Cirrusci
```

```text
include('simpleicons-6/C/Cirrusci')
```



| Illustration | Cirrusci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cirrusci.png) | ![illustration for Cirrusci](../../simpleicons-6/C/Cirrusci.Local.png) |




## Cirrusci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cirrusci
include('simpleicons-6/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label')
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

' loads the Item which embeds the element Cirrusci
include('simpleicons-6/C/Cirrusci')

' renders the element
Cirrusci('Cirrusci', 'Cirrusci', 'an optional tech label')
@enduml
```

