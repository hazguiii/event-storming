# Apachetomcat


```text
simpleicons-6/A/Apachetomcat
```

```text
include('simpleicons-6/A/Apachetomcat')
```



| Illustration | Apachetomcat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apachetomcat.png) | ![illustration for Apachetomcat](../../simpleicons-6/A/Apachetomcat.Local.png) |




## Apachetomcat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachetomcat
include('simpleicons-6/A/Apachetomcat')

' renders the element
Apachetomcat('Apachetomcat', 'Apachetomcat', 'an optional tech label')
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

' loads the Item which embeds the element Apachetomcat
include('simpleicons-6/A/Apachetomcat')

' renders the element
Apachetomcat('Apachetomcat', 'Apachetomcat', 'an optional tech label')
@enduml
```

