# Prettier


```text
simpleicons-6/P/Prettier
```

```text
include('simpleicons-6/P/Prettier')
```



| Illustration | Prettier |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Prettier.png) | ![illustration for Prettier](../../simpleicons-6/P/Prettier.Local.png) |




## Prettier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Prettier
include('simpleicons-6/P/Prettier')

' renders the element
Prettier('Prettier', 'Prettier', 'an optional tech label')
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

' loads the Item which embeds the element Prettier
include('simpleicons-6/P/Prettier')

' renders the element
Prettier('Prettier', 'Prettier', 'an optional tech label')
@enduml
```

