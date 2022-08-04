# Aqua


```text
simpleicons-6/A/Aqua
```

```text
include('simpleicons-6/A/Aqua')
```



| Illustration | Aqua |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aqua.png) | ![illustration for Aqua](../../simpleicons-6/A/Aqua.Local.png) |




## Aqua

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aqua
include('simpleicons-6/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label')
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

' loads the Item which embeds the element Aqua
include('simpleicons-6/A/Aqua')

' renders the element
Aqua('Aqua', 'Aqua', 'an optional tech label')
@enduml
```

