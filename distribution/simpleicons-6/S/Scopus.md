# Scopus


```text
simpleicons-6/S/Scopus
```

```text
include('simpleicons-6/S/Scopus')
```



| Illustration | Scopus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Scopus.png) | ![illustration for Scopus](../../simpleicons-6/S/Scopus.Local.png) |




## Scopus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Scopus
include('simpleicons-6/S/Scopus')

' renders the element
Scopus('Scopus', 'Scopus', 'an optional tech label')
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

' loads the Item which embeds the element Scopus
include('simpleicons-6/S/Scopus')

' renders the element
Scopus('Scopus', 'Scopus', 'an optional tech label')
@enduml
```

