# Pokemon


```text
simpleicons-6/P/Pokemon
```

```text
include('simpleicons-6/P/Pokemon')
```



| Illustration | Pokemon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pokemon.png) | ![illustration for Pokemon](../../simpleicons-6/P/Pokemon.Local.png) |




## Pokemon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pokemon
include('simpleicons-6/P/Pokemon')

' renders the element
Pokemon('Pokemon', 'Pokemon', 'an optional tech label')
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

' loads the Item which embeds the element Pokemon
include('simpleicons-6/P/Pokemon')

' renders the element
Pokemon('Pokemon', 'Pokemon', 'an optional tech label')
@enduml
```

