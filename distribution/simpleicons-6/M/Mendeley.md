# Mendeley


```text
simpleicons-6/M/Mendeley
```

```text
include('simpleicons-6/M/Mendeley')
```



| Illustration | Mendeley |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mendeley.png) | ![illustration for Mendeley](../../simpleicons-6/M/Mendeley.Local.png) |




## Mendeley

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mendeley
include('simpleicons-6/M/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label')
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

' loads the Item which embeds the element Mendeley
include('simpleicons-6/M/Mendeley')

' renders the element
Mendeley('Mendeley', 'Mendeley', 'an optional tech label')
@enduml
```

