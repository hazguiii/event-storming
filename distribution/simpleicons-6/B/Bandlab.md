# Bandlab


```text
simpleicons-6/B/Bandlab
```

```text
include('simpleicons-6/B/Bandlab')
```



| Illustration | Bandlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bandlab.png) | ![illustration for Bandlab](../../simpleicons-6/B/Bandlab.Local.png) |




## Bandlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bandlab
include('simpleicons-6/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label')
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

' loads the Item which embeds the element Bandlab
include('simpleicons-6/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label')
@enduml
```

