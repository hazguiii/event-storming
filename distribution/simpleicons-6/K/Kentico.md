# Kentico


```text
simpleicons-6/K/Kentico
```

```text
include('simpleicons-6/K/Kentico')
```



| Illustration | Kentico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kentico.png) | ![illustration for Kentico](../../simpleicons-6/K/Kentico.Local.png) |




## Kentico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kentico
include('simpleicons-6/K/Kentico')

' renders the element
Kentico('Kentico', 'Kentico', 'an optional tech label')
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

' loads the Item which embeds the element Kentico
include('simpleicons-6/K/Kentico')

' renders the element
Kentico('Kentico', 'Kentico', 'an optional tech label')
@enduml
```

