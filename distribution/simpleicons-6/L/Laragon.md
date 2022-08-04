# Laragon


```text
simpleicons-6/L/Laragon
```

```text
include('simpleicons-6/L/Laragon')
```



| Illustration | Laragon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Laragon.png) | ![illustration for Laragon](../../simpleicons-6/L/Laragon.Local.png) |




## Laragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Laragon
include('simpleicons-6/L/Laragon')

' renders the element
Laragon('Laragon', 'Laragon', 'an optional tech label')
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

' loads the Item which embeds the element Laragon
include('simpleicons-6/L/Laragon')

' renders the element
Laragon('Laragon', 'Laragon', 'an optional tech label')
@enduml
```

