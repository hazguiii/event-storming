# Hulu


```text
simpleicons-6/H/Hulu
```

```text
include('simpleicons-6/H/Hulu')
```



| Illustration | Hulu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hulu.png) | ![illustration for Hulu](../../simpleicons-6/H/Hulu.Local.png) |




## Hulu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hulu
include('simpleicons-6/H/Hulu')

' renders the element
Hulu('Hulu', 'Hulu', 'an optional tech label')
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

' loads the Item which embeds the element Hulu
include('simpleicons-6/H/Hulu')

' renders the element
Hulu('Hulu', 'Hulu', 'an optional tech label')
@enduml
```

