# Foodpanda


```text
simpleicons-6/F/Foodpanda
```

```text
include('simpleicons-6/F/Foodpanda')
```



| Illustration | Foodpanda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Foodpanda.png) | ![illustration for Foodpanda](../../simpleicons-6/F/Foodpanda.Local.png) |




## Foodpanda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Foodpanda
include('simpleicons-6/F/Foodpanda')

' renders the element
Foodpanda('Foodpanda', 'Foodpanda', 'an optional tech label')
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

' loads the Item which embeds the element Foodpanda
include('simpleicons-6/F/Foodpanda')

' renders the element
Foodpanda('Foodpanda', 'Foodpanda', 'an optional tech label')
@enduml
```

