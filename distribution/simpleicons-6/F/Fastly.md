# Fastly


```text
simpleicons-6/F/Fastly
```

```text
include('simpleicons-6/F/Fastly')
```



| Illustration | Fastly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fastly.png) | ![illustration for Fastly](../../simpleicons-6/F/Fastly.Local.png) |




## Fastly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fastly
include('simpleicons-6/F/Fastly')

' renders the element
Fastly('Fastly', 'Fastly', 'an optional tech label')
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

' loads the Item which embeds the element Fastly
include('simpleicons-6/F/Fastly')

' renders the element
Fastly('Fastly', 'Fastly', 'an optional tech label')
@enduml
```

