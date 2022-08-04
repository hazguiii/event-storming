# Cplusplus


```text
simpleicons-6/C/Cplusplus
```

```text
include('simpleicons-6/C/Cplusplus')
```



| Illustration | Cplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cplusplus.png) | ![illustration for Cplusplus](../../simpleicons-6/C/Cplusplus.Local.png) |




## Cplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cplusplus
include('simpleicons-6/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label')
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

' loads the Item which embeds the element Cplusplus
include('simpleicons-6/C/Cplusplus')

' renders the element
Cplusplus('Cplusplus', 'Cplusplus', 'an optional tech label')
@enduml
```

