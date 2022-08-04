# Shanghaimetro


```text
simpleicons-6/S/Shanghaimetro
```

```text
include('simpleicons-6/S/Shanghaimetro')
```



| Illustration | Shanghaimetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Shanghaimetro.png) | ![illustration for Shanghaimetro](../../simpleicons-6/S/Shanghaimetro.Local.png) |




## Shanghaimetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Shanghaimetro
include('simpleicons-6/S/Shanghaimetro')

' renders the element
Shanghaimetro('Shanghaimetro', 'Shanghaimetro', 'an optional tech label')
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

' loads the Item which embeds the element Shanghaimetro
include('simpleicons-6/S/Shanghaimetro')

' renders the element
Shanghaimetro('Shanghaimetro', 'Shanghaimetro', 'an optional tech label')
@enduml
```

