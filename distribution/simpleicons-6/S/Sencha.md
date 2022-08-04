# Sencha


```text
simpleicons-6/S/Sencha
```

```text
include('simpleicons-6/S/Sencha')
```



| Illustration | Sencha |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sencha.png) | ![illustration for Sencha](../../simpleicons-6/S/Sencha.Local.png) |




## Sencha

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sencha
include('simpleicons-6/S/Sencha')

' renders the element
Sencha('Sencha', 'Sencha', 'an optional tech label')
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

' loads the Item which embeds the element Sencha
include('simpleicons-6/S/Sencha')

' renders the element
Sencha('Sencha', 'Sencha', 'an optional tech label')
@enduml
```

