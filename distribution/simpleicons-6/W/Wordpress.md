# Wordpress


```text
simpleicons-6/W/Wordpress
```

```text
include('simpleicons-6/W/Wordpress')
```



| Illustration | Wordpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wordpress.png) | ![illustration for Wordpress](../../simpleicons-6/W/Wordpress.Local.png) |




## Wordpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wordpress
include('simpleicons-6/W/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
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

' loads the Item which embeds the element Wordpress
include('simpleicons-6/W/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
@enduml
```

