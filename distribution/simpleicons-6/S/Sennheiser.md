# Sennheiser


```text
simpleicons-6/S/Sennheiser
```

```text
include('simpleicons-6/S/Sennheiser')
```



| Illustration | Sennheiser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sennheiser.png) | ![illustration for Sennheiser](../../simpleicons-6/S/Sennheiser.Local.png) |




## Sennheiser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sennheiser
include('simpleicons-6/S/Sennheiser')

' renders the element
Sennheiser('Sennheiser', 'Sennheiser', 'an optional tech label')
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

' loads the Item which embeds the element Sennheiser
include('simpleicons-6/S/Sennheiser')

' renders the element
Sennheiser('Sennheiser', 'Sennheiser', 'an optional tech label')
@enduml
```

