# Treehouse


```text
simpleicons-6/T/Treehouse
```

```text
include('simpleicons-6/T/Treehouse')
```



| Illustration | Treehouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Treehouse.png) | ![illustration for Treehouse](../../simpleicons-6/T/Treehouse.Local.png) |




## Treehouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Treehouse
include('simpleicons-6/T/Treehouse')

' renders the element
Treehouse('Treehouse', 'Treehouse', 'an optional tech label')
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

' loads the Item which embeds the element Treehouse
include('simpleicons-6/T/Treehouse')

' renders the element
Treehouse('Treehouse', 'Treehouse', 'an optional tech label')
@enduml
```

