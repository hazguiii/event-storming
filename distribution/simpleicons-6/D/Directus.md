# Directus


```text
simpleicons-6/D/Directus
```

```text
include('simpleicons-6/D/Directus')
```



| Illustration | Directus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Directus.png) | ![illustration for Directus](../../simpleicons-6/D/Directus.Local.png) |




## Directus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Directus
include('simpleicons-6/D/Directus')

' renders the element
Directus('Directus', 'Directus', 'an optional tech label')
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

' loads the Item which embeds the element Directus
include('simpleicons-6/D/Directus')

' renders the element
Directus('Directus', 'Directus', 'an optional tech label')
@enduml
```

