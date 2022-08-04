# Now


```text
simpleicons-6/N/Now
```

```text
include('simpleicons-6/N/Now')
```



| Illustration | Now |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Now.png) | ![illustration for Now](../../simpleicons-6/N/Now.Local.png) |




## Now

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Now
include('simpleicons-6/N/Now')

' renders the element
Now('Now', 'Now', 'an optional tech label')
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

' loads the Item which embeds the element Now
include('simpleicons-6/N/Now')

' renders the element
Now('Now', 'Now', 'an optional tech label')
@enduml
```

