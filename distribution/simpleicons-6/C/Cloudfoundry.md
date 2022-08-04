# Cloudfoundry


```text
simpleicons-6/C/Cloudfoundry
```

```text
include('simpleicons-6/C/Cloudfoundry')
```



| Illustration | Cloudfoundry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cloudfoundry.png) | ![illustration for Cloudfoundry](../../simpleicons-6/C/Cloudfoundry.Local.png) |




## Cloudfoundry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cloudfoundry
include('simpleicons-6/C/Cloudfoundry')

' renders the element
Cloudfoundry('Cloudfoundry', 'Cloudfoundry', 'an optional tech label')
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

' loads the Item which embeds the element Cloudfoundry
include('simpleicons-6/C/Cloudfoundry')

' renders the element
Cloudfoundry('Cloudfoundry', 'Cloudfoundry', 'an optional tech label')
@enduml
```

