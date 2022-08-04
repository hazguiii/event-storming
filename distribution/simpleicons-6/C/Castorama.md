# Castorama


```text
simpleicons-6/C/Castorama
```

```text
include('simpleicons-6/C/Castorama')
```



| Illustration | Castorama |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Castorama.png) | ![illustration for Castorama](../../simpleicons-6/C/Castorama.Local.png) |




## Castorama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Castorama
include('simpleicons-6/C/Castorama')

' renders the element
Castorama('Castorama', 'Castorama', 'an optional tech label')
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

' loads the Item which embeds the element Castorama
include('simpleicons-6/C/Castorama')

' renders the element
Castorama('Castorama', 'Castorama', 'an optional tech label')
@enduml
```

