# Letsencrypt


```text
simpleicons-6/L/Letsencrypt
```

```text
include('simpleicons-6/L/Letsencrypt')
```



| Illustration | Letsencrypt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Letsencrypt.png) | ![illustration for Letsencrypt](../../simpleicons-6/L/Letsencrypt.Local.png) |




## Letsencrypt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Letsencrypt
include('simpleicons-6/L/Letsencrypt')

' renders the element
Letsencrypt('Letsencrypt', 'Letsencrypt', 'an optional tech label')
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

' loads the Item which embeds the element Letsencrypt
include('simpleicons-6/L/Letsencrypt')

' renders the element
Letsencrypt('Letsencrypt', 'Letsencrypt', 'an optional tech label')
@enduml
```

