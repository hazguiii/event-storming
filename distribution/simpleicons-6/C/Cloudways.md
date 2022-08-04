# Cloudways


```text
simpleicons-6/C/Cloudways
```

```text
include('simpleicons-6/C/Cloudways')
```



| Illustration | Cloudways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cloudways.png) | ![illustration for Cloudways](../../simpleicons-6/C/Cloudways.Local.png) |




## Cloudways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cloudways
include('simpleicons-6/C/Cloudways')

' renders the element
Cloudways('Cloudways', 'Cloudways', 'an optional tech label')
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

' loads the Item which embeds the element Cloudways
include('simpleicons-6/C/Cloudways')

' renders the element
Cloudways('Cloudways', 'Cloudways', 'an optional tech label')
@enduml
```

