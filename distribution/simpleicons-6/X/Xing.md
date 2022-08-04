# Xing


```text
simpleicons-6/X/Xing
```

```text
include('simpleicons-6/X/Xing')
```



| Illustration | Xing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xing.png) | ![illustration for Xing](../../simpleicons-6/X/Xing.Local.png) |




## Xing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xing
include('simpleicons-6/X/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label')
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

' loads the Item which embeds the element Xing
include('simpleicons-6/X/Xing')

' renders the element
Xing('Xing', 'Xing', 'an optional tech label')
@enduml
```

