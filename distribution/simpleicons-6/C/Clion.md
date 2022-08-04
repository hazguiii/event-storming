# Clion


```text
simpleicons-6/C/Clion
```

```text
include('simpleicons-6/C/Clion')
```



| Illustration | Clion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Clion.png) | ![illustration for Clion](../../simpleicons-6/C/Clion.Local.png) |




## Clion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clion
include('simpleicons-6/C/Clion')

' renders the element
Clion('Clion', 'Clion', 'an optional tech label')
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

' loads the Item which embeds the element Clion
include('simpleicons-6/C/Clion')

' renders the element
Clion('Clion', 'Clion', 'an optional tech label')
@enduml
```

