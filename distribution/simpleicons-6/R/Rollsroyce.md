# Rollsroyce


```text
simpleicons-6/R/Rollsroyce
```

```text
include('simpleicons-6/R/Rollsroyce')
```



| Illustration | Rollsroyce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rollsroyce.png) | ![illustration for Rollsroyce](../../simpleicons-6/R/Rollsroyce.Local.png) |




## Rollsroyce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rollsroyce
include('simpleicons-6/R/Rollsroyce')

' renders the element
Rollsroyce('Rollsroyce', 'Rollsroyce', 'an optional tech label')
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

' loads the Item which embeds the element Rollsroyce
include('simpleicons-6/R/Rollsroyce')

' renders the element
Rollsroyce('Rollsroyce', 'Rollsroyce', 'an optional tech label')
@enduml
```

