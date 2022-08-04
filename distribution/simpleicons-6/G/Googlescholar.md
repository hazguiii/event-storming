# Googlescholar


```text
simpleicons-6/G/Googlescholar
```

```text
include('simpleicons-6/G/Googlescholar')
```



| Illustration | Googlescholar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlescholar.png) | ![illustration for Googlescholar](../../simpleicons-6/G/Googlescholar.Local.png) |




## Googlescholar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlescholar
include('simpleicons-6/G/Googlescholar')

' renders the element
Googlescholar('Googlescholar', 'Googlescholar', 'an optional tech label')
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

' loads the Item which embeds the element Googlescholar
include('simpleicons-6/G/Googlescholar')

' renders the element
Googlescholar('Googlescholar', 'Googlescholar', 'an optional tech label')
@enduml
```

