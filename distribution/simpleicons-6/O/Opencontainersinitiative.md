# Opencontainersinitiative


```text
simpleicons-6/O/Opencontainersinitiative
```

```text
include('simpleicons-6/O/Opencontainersinitiative')
```



| Illustration | Opencontainersinitiative |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Opencontainersinitiative.png) | ![illustration for Opencontainersinitiative](../../simpleicons-6/O/Opencontainersinitiative.Local.png) |




## Opencontainersinitiative

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Opencontainersinitiative
include('simpleicons-6/O/Opencontainersinitiative')

' renders the element
Opencontainersinitiative('Opencontainersinitiative', 'Opencontainersinitiative', 'an optional tech label')
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

' loads the Item which embeds the element Opencontainersinitiative
include('simpleicons-6/O/Opencontainersinitiative')

' renders the element
Opencontainersinitiative('Opencontainersinitiative', 'Opencontainersinitiative', 'an optional tech label')
@enduml
```

