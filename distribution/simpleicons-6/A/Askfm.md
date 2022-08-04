# Askfm


```text
simpleicons-6/A/Askfm
```

```text
include('simpleicons-6/A/Askfm')
```



| Illustration | Askfm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Askfm.png) | ![illustration for Askfm](../../simpleicons-6/A/Askfm.Local.png) |




## Askfm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Askfm
include('simpleicons-6/A/Askfm')

' renders the element
Askfm('Askfm', 'Askfm', 'an optional tech label')
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

' loads the Item which embeds the element Askfm
include('simpleicons-6/A/Askfm')

' renders the element
Askfm('Askfm', 'Askfm', 'an optional tech label')
@enduml
```

