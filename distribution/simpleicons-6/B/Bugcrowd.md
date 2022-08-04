# Bugcrowd


```text
simpleicons-6/B/Bugcrowd
```

```text
include('simpleicons-6/B/Bugcrowd')
```



| Illustration | Bugcrowd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bugcrowd.png) | ![illustration for Bugcrowd](../../simpleicons-6/B/Bugcrowd.Local.png) |




## Bugcrowd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bugcrowd
include('simpleicons-6/B/Bugcrowd')

' renders the element
Bugcrowd('Bugcrowd', 'Bugcrowd', 'an optional tech label')
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

' loads the Item which embeds the element Bugcrowd
include('simpleicons-6/B/Bugcrowd')

' renders the element
Bugcrowd('Bugcrowd', 'Bugcrowd', 'an optional tech label')
@enduml
```

