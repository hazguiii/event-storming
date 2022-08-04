# Devdotto


```text
simpleicons-6/D/Devdotto
```

```text
include('simpleicons-6/D/Devdotto')
```



| Illustration | Devdotto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Devdotto.png) | ![illustration for Devdotto](../../simpleicons-6/D/Devdotto.Local.png) |




## Devdotto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Devdotto
include('simpleicons-6/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label')
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

' loads the Item which embeds the element Devdotto
include('simpleicons-6/D/Devdotto')

' renders the element
Devdotto('Devdotto', 'Devdotto', 'an optional tech label')
@enduml
```

