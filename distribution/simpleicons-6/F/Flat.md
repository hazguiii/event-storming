# Flat


```text
simpleicons-6/F/Flat
```

```text
include('simpleicons-6/F/Flat')
```



| Illustration | Flat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Flat.png) | ![illustration for Flat](../../simpleicons-6/F/Flat.Local.png) |




## Flat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Flat
include('simpleicons-6/F/Flat')

' renders the element
Flat('Flat', 'Flat', 'an optional tech label')
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

' loads the Item which embeds the element Flat
include('simpleicons-6/F/Flat')

' renders the element
Flat('Flat', 'Flat', 'an optional tech label')
@enduml
```

