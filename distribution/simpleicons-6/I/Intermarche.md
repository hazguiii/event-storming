# Intermarche


```text
simpleicons-6/I/Intermarche
```

```text
include('simpleicons-6/I/Intermarche')
```



| Illustration | Intermarche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Intermarche.png) | ![illustration for Intermarche](../../simpleicons-6/I/Intermarche.Local.png) |




## Intermarche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Intermarche
include('simpleicons-6/I/Intermarche')

' renders the element
Intermarche('Intermarche', 'Intermarche', 'an optional tech label')
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

' loads the Item which embeds the element Intermarche
include('simpleicons-6/I/Intermarche')

' renders the element
Intermarche('Intermarche', 'Intermarche', 'an optional tech label')
@enduml
```

