# Treyarch


```text
simpleicons-6/T/Treyarch
```

```text
include('simpleicons-6/T/Treyarch')
```



| Illustration | Treyarch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Treyarch.png) | ![illustration for Treyarch](../../simpleicons-6/T/Treyarch.Local.png) |




## Treyarch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Treyarch
include('simpleicons-6/T/Treyarch')

' renders the element
Treyarch('Treyarch', 'Treyarch', 'an optional tech label')
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

' loads the Item which embeds the element Treyarch
include('simpleicons-6/T/Treyarch')

' renders the element
Treyarch('Treyarch', 'Treyarch', 'an optional tech label')
@enduml
```

