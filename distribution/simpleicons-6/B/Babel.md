# Babel


```text
simpleicons-6/B/Babel
```

```text
include('simpleicons-6/B/Babel')
```



| Illustration | Babel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Babel.png) | ![illustration for Babel](../../simpleicons-6/B/Babel.Local.png) |




## Babel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Babel
include('simpleicons-6/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label')
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

' loads the Item which embeds the element Babel
include('simpleicons-6/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label')
@enduml
```

