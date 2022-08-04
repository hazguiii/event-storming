# Apachespark


```text
simpleicons-6/A/Apachespark
```

```text
include('simpleicons-6/A/Apachespark')
```



| Illustration | Apachespark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apachespark.png) | ![illustration for Apachespark](../../simpleicons-6/A/Apachespark.Local.png) |




## Apachespark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachespark
include('simpleicons-6/A/Apachespark')

' renders the element
Apachespark('Apachespark', 'Apachespark', 'an optional tech label')
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

' loads the Item which embeds the element Apachespark
include('simpleicons-6/A/Apachespark')

' renders the element
Apachespark('Apachespark', 'Apachespark', 'an optional tech label')
@enduml
```

