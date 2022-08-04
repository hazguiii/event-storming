# Threadless


```text
simpleicons-6/T/Threadless
```

```text
include('simpleicons-6/T/Threadless')
```



| Illustration | Threadless |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Threadless.png) | ![illustration for Threadless](../../simpleicons-6/T/Threadless.Local.png) |




## Threadless

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Threadless
include('simpleicons-6/T/Threadless')

' renders the element
Threadless('Threadless', 'Threadless', 'an optional tech label')
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

' loads the Item which embeds the element Threadless
include('simpleicons-6/T/Threadless')

' renders the element
Threadless('Threadless', 'Threadless', 'an optional tech label')
@enduml
```

