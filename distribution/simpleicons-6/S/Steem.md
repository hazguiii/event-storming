# Steem


```text
simpleicons-6/S/Steem
```

```text
include('simpleicons-6/S/Steem')
```



| Illustration | Steem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Steem.png) | ![illustration for Steem](../../simpleicons-6/S/Steem.Local.png) |




## Steem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Steem
include('simpleicons-6/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label')
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

' loads the Item which embeds the element Steem
include('simpleicons-6/S/Steem')

' renders the element
Steem('Steem', 'Steem', 'an optional tech label')
@enduml
```

