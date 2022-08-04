# Dior


```text
simpleicons-6/D/Dior
```

```text
include('simpleicons-6/D/Dior')
```



| Illustration | Dior |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dior.png) | ![illustration for Dior](../../simpleicons-6/D/Dior.Local.png) |




## Dior

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dior
include('simpleicons-6/D/Dior')

' renders the element
Dior('Dior', 'Dior', 'an optional tech label')
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

' loads the Item which embeds the element Dior
include('simpleicons-6/D/Dior')

' renders the element
Dior('Dior', 'Dior', 'an optional tech label')
@enduml
```

