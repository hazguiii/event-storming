# Biolink


```text
simpleicons-6/B/Biolink
```

```text
include('simpleicons-6/B/Biolink')
```



| Illustration | Biolink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Biolink.png) | ![illustration for Biolink](../../simpleicons-6/B/Biolink.Local.png) |




## Biolink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Biolink
include('simpleicons-6/B/Biolink')

' renders the element
Biolink('Biolink', 'Biolink', 'an optional tech label')
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

' loads the Item which embeds the element Biolink
include('simpleicons-6/B/Biolink')

' renders the element
Biolink('Biolink', 'Biolink', 'an optional tech label')
@enduml
```

