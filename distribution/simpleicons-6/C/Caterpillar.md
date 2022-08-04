# Caterpillar


```text
simpleicons-6/C/Caterpillar
```

```text
include('simpleicons-6/C/Caterpillar')
```



| Illustration | Caterpillar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Caterpillar.png) | ![illustration for Caterpillar](../../simpleicons-6/C/Caterpillar.Local.png) |




## Caterpillar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Caterpillar
include('simpleicons-6/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label')
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

' loads the Item which embeds the element Caterpillar
include('simpleicons-6/C/Caterpillar')

' renders the element
Caterpillar('Caterpillar', 'Caterpillar', 'an optional tech label')
@enduml
```

