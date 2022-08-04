# Bankofamerica


```text
simpleicons-6/B/Bankofamerica
```

```text
include('simpleicons-6/B/Bankofamerica')
```



| Illustration | Bankofamerica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bankofamerica.png) | ![illustration for Bankofamerica](../../simpleicons-6/B/Bankofamerica.Local.png) |




## Bankofamerica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bankofamerica
include('simpleicons-6/B/Bankofamerica')

' renders the element
Bankofamerica('Bankofamerica', 'Bankofamerica', 'an optional tech label')
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

' loads the Item which embeds the element Bankofamerica
include('simpleicons-6/B/Bankofamerica')

' renders the element
Bankofamerica('Bankofamerica', 'Bankofamerica', 'an optional tech label')
@enduml
```

