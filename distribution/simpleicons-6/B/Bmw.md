# Bmw


```text
simpleicons-6/B/Bmw
```

```text
include('simpleicons-6/B/Bmw')
```



| Illustration | Bmw |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bmw.png) | ![illustration for Bmw](../../simpleicons-6/B/Bmw.Local.png) |




## Bmw

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bmw
include('simpleicons-6/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label')
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

' loads the Item which embeds the element Bmw
include('simpleicons-6/B/Bmw')

' renders the element
Bmw('Bmw', 'Bmw', 'an optional tech label')
@enduml
```

