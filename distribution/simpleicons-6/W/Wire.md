# Wire


```text
simpleicons-6/W/Wire
```

```text
include('simpleicons-6/W/Wire')
```



| Illustration | Wire |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wire.png) | ![illustration for Wire](../../simpleicons-6/W/Wire.Local.png) |




## Wire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wire
include('simpleicons-6/W/Wire')

' renders the element
Wire('Wire', 'Wire', 'an optional tech label')
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

' loads the Item which embeds the element Wire
include('simpleicons-6/W/Wire')

' renders the element
Wire('Wire', 'Wire', 'an optional tech label')
@enduml
```

