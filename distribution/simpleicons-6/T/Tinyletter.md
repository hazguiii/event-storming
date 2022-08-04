# Tinyletter


```text
simpleicons-6/T/Tinyletter
```

```text
include('simpleicons-6/T/Tinyletter')
```



| Illustration | Tinyletter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tinyletter.png) | ![illustration for Tinyletter](../../simpleicons-6/T/Tinyletter.Local.png) |




## Tinyletter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tinyletter
include('simpleicons-6/T/Tinyletter')

' renders the element
Tinyletter('Tinyletter', 'Tinyletter', 'an optional tech label')
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

' loads the Item which embeds the element Tinyletter
include('simpleicons-6/T/Tinyletter')

' renders the element
Tinyletter('Tinyletter', 'Tinyletter', 'an optional tech label')
@enduml
```

