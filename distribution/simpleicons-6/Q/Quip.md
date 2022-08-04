# Quip


```text
simpleicons-6/Q/Quip
```

```text
include('simpleicons-6/Q/Quip')
```



| Illustration | Quip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Quip.png) | ![illustration for Quip](../../simpleicons-6/Q/Quip.Local.png) |




## Quip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quip
include('simpleicons-6/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label')
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

' loads the Item which embeds the element Quip
include('simpleicons-6/Q/Quip')

' renders the element
Quip('Quip', 'Quip', 'an optional tech label')
@enduml
```

