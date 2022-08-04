# Bitly


```text
simpleicons-6/B/Bitly
```

```text
include('simpleicons-6/B/Bitly')
```



| Illustration | Bitly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bitly.png) | ![illustration for Bitly](../../simpleicons-6/B/Bitly.Local.png) |




## Bitly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bitly
include('simpleicons-6/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label')
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

' loads the Item which embeds the element Bitly
include('simpleicons-6/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label')
@enduml
```

