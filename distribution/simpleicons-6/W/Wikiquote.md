# Wikiquote


```text
simpleicons-6/W/Wikiquote
```

```text
include('simpleicons-6/W/Wikiquote')
```



| Illustration | Wikiquote |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wikiquote.png) | ![illustration for Wikiquote](../../simpleicons-6/W/Wikiquote.Local.png) |




## Wikiquote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikiquote
include('simpleicons-6/W/Wikiquote')

' renders the element
Wikiquote('Wikiquote', 'Wikiquote', 'an optional tech label')
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

' loads the Item which embeds the element Wikiquote
include('simpleicons-6/W/Wikiquote')

' renders the element
Wikiquote('Wikiquote', 'Wikiquote', 'an optional tech label')
@enduml
```

