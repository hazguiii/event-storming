# Ibmwatson


```text
simpleicons-6/I/Ibmwatson
```

```text
include('simpleicons-6/I/Ibmwatson')
```



| Illustration | Ibmwatson |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ibmwatson.png) | ![illustration for Ibmwatson](../../simpleicons-6/I/Ibmwatson.Local.png) |




## Ibmwatson

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ibmwatson
include('simpleicons-6/I/Ibmwatson')

' renders the element
Ibmwatson('Ibmwatson', 'Ibmwatson', 'an optional tech label')
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

' loads the Item which embeds the element Ibmwatson
include('simpleicons-6/I/Ibmwatson')

' renders the element
Ibmwatson('Ibmwatson', 'Ibmwatson', 'an optional tech label')
@enduml
```

