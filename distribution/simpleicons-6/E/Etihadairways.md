# Etihadairways


```text
simpleicons-6/E/Etihadairways
```

```text
include('simpleicons-6/E/Etihadairways')
```



| Illustration | Etihadairways |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Etihadairways.png) | ![illustration for Etihadairways](../../simpleicons-6/E/Etihadairways.Local.png) |




## Etihadairways

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Etihadairways
include('simpleicons-6/E/Etihadairways')

' renders the element
Etihadairways('Etihadairways', 'Etihadairways', 'an optional tech label')
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

' loads the Item which embeds the element Etihadairways
include('simpleicons-6/E/Etihadairways')

' renders the element
Etihadairways('Etihadairways', 'Etihadairways', 'an optional tech label')
@enduml
```

