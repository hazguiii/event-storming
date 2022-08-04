# Audi


```text
simpleicons-6/A/Audi
```

```text
include('simpleicons-6/A/Audi')
```



| Illustration | Audi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Audi.png) | ![illustration for Audi](../../simpleicons-6/A/Audi.Local.png) |




## Audi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Audi
include('simpleicons-6/A/Audi')

' renders the element
Audi('Audi', 'Audi', 'an optional tech label')
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

' loads the Item which embeds the element Audi
include('simpleicons-6/A/Audi')

' renders the element
Audi('Audi', 'Audi', 'an optional tech label')
@enduml
```

