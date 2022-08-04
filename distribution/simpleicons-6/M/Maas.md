# Maas


```text
simpleicons-6/M/Maas
```

```text
include('simpleicons-6/M/Maas')
```



| Illustration | Maas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Maas.png) | ![illustration for Maas](../../simpleicons-6/M/Maas.Local.png) |




## Maas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Maas
include('simpleicons-6/M/Maas')

' renders the element
Maas('Maas', 'Maas', 'an optional tech label')
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

' loads the Item which embeds the element Maas
include('simpleicons-6/M/Maas')

' renders the element
Maas('Maas', 'Maas', 'an optional tech label')
@enduml
```

