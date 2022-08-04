# Okcupid


```text
simpleicons-6/O/Okcupid
```

```text
include('simpleicons-6/O/Okcupid')
```



| Illustration | Okcupid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Okcupid.png) | ![illustration for Okcupid](../../simpleicons-6/O/Okcupid.Local.png) |




## Okcupid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Okcupid
include('simpleicons-6/O/Okcupid')

' renders the element
Okcupid('Okcupid', 'Okcupid', 'an optional tech label')
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

' loads the Item which embeds the element Okcupid
include('simpleicons-6/O/Okcupid')

' renders the element
Okcupid('Okcupid', 'Okcupid', 'an optional tech label')
@enduml
```

