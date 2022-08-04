# Springsecurity


```text
simpleicons-6/S/Springsecurity
```

```text
include('simpleicons-6/S/Springsecurity')
```



| Illustration | Springsecurity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Springsecurity.png) | ![illustration for Springsecurity](../../simpleicons-6/S/Springsecurity.Local.png) |




## Springsecurity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Springsecurity
include('simpleicons-6/S/Springsecurity')

' renders the element
Springsecurity('Springsecurity', 'Springsecurity', 'an optional tech label')
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

' loads the Item which embeds the element Springsecurity
include('simpleicons-6/S/Springsecurity')

' renders the element
Springsecurity('Springsecurity', 'Springsecurity', 'an optional tech label')
@enduml
```

