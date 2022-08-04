# Chevrolet


```text
simpleicons-6/C/Chevrolet
```

```text
include('simpleicons-6/C/Chevrolet')
```



| Illustration | Chevrolet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Chevrolet.png) | ![illustration for Chevrolet](../../simpleicons-6/C/Chevrolet.Local.png) |




## Chevrolet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Chevrolet
include('simpleicons-6/C/Chevrolet')

' renders the element
Chevrolet('Chevrolet', 'Chevrolet', 'an optional tech label')
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

' loads the Item which embeds the element Chevrolet
include('simpleicons-6/C/Chevrolet')

' renders the element
Chevrolet('Chevrolet', 'Chevrolet', 'an optional tech label')
@enduml
```

