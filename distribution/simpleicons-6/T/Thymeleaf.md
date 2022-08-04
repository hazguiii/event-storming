# Thymeleaf


```text
simpleicons-6/T/Thymeleaf
```

```text
include('simpleicons-6/T/Thymeleaf')
```



| Illustration | Thymeleaf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Thymeleaf.png) | ![illustration for Thymeleaf](../../simpleicons-6/T/Thymeleaf.Local.png) |




## Thymeleaf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Thymeleaf
include('simpleicons-6/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label')
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

' loads the Item which embeds the element Thymeleaf
include('simpleicons-6/T/Thymeleaf')

' renders the element
Thymeleaf('Thymeleaf', 'Thymeleaf', 'an optional tech label')
@enduml
```

