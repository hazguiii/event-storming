# Ibm


```text
simpleicons-6/I/Ibm
```

```text
include('simpleicons-6/I/Ibm')
```



| Illustration | Ibm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Ibm.png) | ![illustration for Ibm](../../simpleicons-6/I/Ibm.Local.png) |




## Ibm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ibm
include('simpleicons-6/I/Ibm')

' renders the element
Ibm('Ibm', 'Ibm', 'an optional tech label')
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

' loads the Item which embeds the element Ibm
include('simpleicons-6/I/Ibm')

' renders the element
Ibm('Ibm', 'Ibm', 'an optional tech label')
@enduml
```

