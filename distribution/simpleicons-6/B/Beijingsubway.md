# Beijingsubway


```text
simpleicons-6/B/Beijingsubway
```

```text
include('simpleicons-6/B/Beijingsubway')
```



| Illustration | Beijingsubway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Beijingsubway.png) | ![illustration for Beijingsubway](../../simpleicons-6/B/Beijingsubway.Local.png) |




## Beijingsubway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Beijingsubway
include('simpleicons-6/B/Beijingsubway')

' renders the element
Beijingsubway('Beijingsubway', 'Beijingsubway', 'an optional tech label')
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

' loads the Item which embeds the element Beijingsubway
include('simpleicons-6/B/Beijingsubway')

' renders the element
Beijingsubway('Beijingsubway', 'Beijingsubway', 'an optional tech label')
@enduml
```

