# Grandfrais


```text
simpleicons-6/G/Grandfrais
```

```text
include('simpleicons-6/G/Grandfrais')
```



| Illustration | Grandfrais |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Grandfrais.png) | ![illustration for Grandfrais](../../simpleicons-6/G/Grandfrais.Local.png) |




## Grandfrais

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grandfrais
include('simpleicons-6/G/Grandfrais')

' renders the element
Grandfrais('Grandfrais', 'Grandfrais', 'an optional tech label')
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

' loads the Item which embeds the element Grandfrais
include('simpleicons-6/G/Grandfrais')

' renders the element
Grandfrais('Grandfrais', 'Grandfrais', 'an optional tech label')
@enduml
```

