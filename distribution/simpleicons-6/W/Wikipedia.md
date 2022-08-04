# Wikipedia


```text
simpleicons-6/W/Wikipedia
```

```text
include('simpleicons-6/W/Wikipedia')
```



| Illustration | Wikipedia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wikipedia.png) | ![illustration for Wikipedia](../../simpleicons-6/W/Wikipedia.Local.png) |




## Wikipedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikipedia
include('simpleicons-6/W/Wikipedia')

' renders the element
Wikipedia('Wikipedia', 'Wikipedia', 'an optional tech label')
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

' loads the Item which embeds the element Wikipedia
include('simpleicons-6/W/Wikipedia')

' renders the element
Wikipedia('Wikipedia', 'Wikipedia', 'an optional tech label')
@enduml
```

