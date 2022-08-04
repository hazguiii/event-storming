# Magisk


```text
simpleicons-6/M/Magisk
```

```text
include('simpleicons-6/M/Magisk')
```



| Illustration | Magisk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Magisk.png) | ![illustration for Magisk](../../simpleicons-6/M/Magisk.Local.png) |




## Magisk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Magisk
include('simpleicons-6/M/Magisk')

' renders the element
Magisk('Magisk', 'Magisk', 'an optional tech label')
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

' loads the Item which embeds the element Magisk
include('simpleicons-6/M/Magisk')

' renders the element
Magisk('Magisk', 'Magisk', 'an optional tech label')
@enduml
```

