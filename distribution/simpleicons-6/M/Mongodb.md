# Mongodb


```text
simpleicons-6/M/Mongodb
```

```text
include('simpleicons-6/M/Mongodb')
```



| Illustration | Mongodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mongodb.png) | ![illustration for Mongodb](../../simpleicons-6/M/Mongodb.Local.png) |




## Mongodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mongodb
include('simpleicons-6/M/Mongodb')

' renders the element
Mongodb('Mongodb', 'Mongodb', 'an optional tech label')
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

' loads the Item which embeds the element Mongodb
include('simpleicons-6/M/Mongodb')

' renders the element
Mongodb('Mongodb', 'Mongodb', 'an optional tech label')
@enduml
```

