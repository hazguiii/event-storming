# Postcss


```text
simpleicons-6/P/Postcss
```

```text
include('simpleicons-6/P/Postcss')
```



| Illustration | Postcss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Postcss.png) | ![illustration for Postcss](../../simpleicons-6/P/Postcss.Local.png) |




## Postcss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Postcss
include('simpleicons-6/P/Postcss')

' renders the element
Postcss('Postcss', 'Postcss', 'an optional tech label')
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

' loads the Item which embeds the element Postcss
include('simpleicons-6/P/Postcss')

' renders the element
Postcss('Postcss', 'Postcss', 'an optional tech label')
@enduml
```

