# Hellofresh


```text
simpleicons-6/H/Hellofresh
```

```text
include('simpleicons-6/H/Hellofresh')
```



| Illustration | Hellofresh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hellofresh.png) | ![illustration for Hellofresh](../../simpleicons-6/H/Hellofresh.Local.png) |




## Hellofresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hellofresh
include('simpleicons-6/H/Hellofresh')

' renders the element
Hellofresh('Hellofresh', 'Hellofresh', 'an optional tech label')
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

' loads the Item which embeds the element Hellofresh
include('simpleicons-6/H/Hellofresh')

' renders the element
Hellofresh('Hellofresh', 'Hellofresh', 'an optional tech label')
@enduml
```

