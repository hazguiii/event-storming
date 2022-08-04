# Hackerearth


```text
simpleicons-6/H/Hackerearth
```

```text
include('simpleicons-6/H/Hackerearth')
```



| Illustration | Hackerearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hackerearth.png) | ![illustration for Hackerearth](../../simpleicons-6/H/Hackerearth.Local.png) |




## Hackerearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hackerearth
include('simpleicons-6/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label')
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

' loads the Item which embeds the element Hackerearth
include('simpleicons-6/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label')
@enduml
```

