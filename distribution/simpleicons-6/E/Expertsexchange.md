# Expertsexchange


```text
simpleicons-6/E/Expertsexchange
```

```text
include('simpleicons-6/E/Expertsexchange')
```



| Illustration | Expertsexchange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Expertsexchange.png) | ![illustration for Expertsexchange](../../simpleicons-6/E/Expertsexchange.Local.png) |




## Expertsexchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Expertsexchange
include('simpleicons-6/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label')
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

' loads the Item which embeds the element Expertsexchange
include('simpleicons-6/E/Expertsexchange')

' renders the element
Expertsexchange('Expertsexchange', 'Expertsexchange', 'an optional tech label')
@enduml
```

