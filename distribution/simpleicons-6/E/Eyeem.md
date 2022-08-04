# Eyeem


```text
simpleicons-6/E/Eyeem
```

```text
include('simpleicons-6/E/Eyeem')
```



| Illustration | Eyeem |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Eyeem.png) | ![illustration for Eyeem](../../simpleicons-6/E/Eyeem.Local.png) |




## Eyeem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eyeem
include('simpleicons-6/E/Eyeem')

' renders the element
Eyeem('Eyeem', 'Eyeem', 'an optional tech label')
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

' loads the Item which embeds the element Eyeem
include('simpleicons-6/E/Eyeem')

' renders the element
Eyeem('Eyeem', 'Eyeem', 'an optional tech label')
@enduml
```

