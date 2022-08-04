# Zerply


```text
simpleicons-6/Z/Zerply
```

```text
include('simpleicons-6/Z/Zerply')
```



| Illustration | Zerply |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zerply.png) | ![illustration for Zerply](../../simpleicons-6/Z/Zerply.Local.png) |




## Zerply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zerply
include('simpleicons-6/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label')
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

' loads the Item which embeds the element Zerply
include('simpleicons-6/Z/Zerply')

' renders the element
Zerply('Zerply', 'Zerply', 'an optional tech label')
@enduml
```

