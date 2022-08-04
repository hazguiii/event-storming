# Kde


```text
simpleicons-6/K/Kde
```

```text
include('simpleicons-6/K/Kde')
```



| Illustration | Kde |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kde.png) | ![illustration for Kde](../../simpleicons-6/K/Kde.Local.png) |




## Kde

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kde
include('simpleicons-6/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label')
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

' loads the Item which embeds the element Kde
include('simpleicons-6/K/Kde')

' renders the element
Kde('Kde', 'Kde', 'an optional tech label')
@enduml
```

