# Lenovo


```text
simpleicons-6/L/Lenovo
```

```text
include('simpleicons-6/L/Lenovo')
```



| Illustration | Lenovo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lenovo.png) | ![illustration for Lenovo](../../simpleicons-6/L/Lenovo.Local.png) |




## Lenovo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lenovo
include('simpleicons-6/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label')
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

' loads the Item which embeds the element Lenovo
include('simpleicons-6/L/Lenovo')

' renders the element
Lenovo('Lenovo', 'Lenovo', 'an optional tech label')
@enduml
```

