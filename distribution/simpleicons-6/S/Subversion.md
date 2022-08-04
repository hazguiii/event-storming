# Subversion


```text
simpleicons-6/S/Subversion
```

```text
include('simpleicons-6/S/Subversion')
```



| Illustration | Subversion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Subversion.png) | ![illustration for Subversion](../../simpleicons-6/S/Subversion.Local.png) |




## Subversion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Subversion
include('simpleicons-6/S/Subversion')

' renders the element
Subversion('Subversion', 'Subversion', 'an optional tech label')
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

' loads the Item which embeds the element Subversion
include('simpleicons-6/S/Subversion')

' renders the element
Subversion('Subversion', 'Subversion', 'an optional tech label')
@enduml
```

