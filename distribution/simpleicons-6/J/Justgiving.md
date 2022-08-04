# Justgiving


```text
simpleicons-6/J/Justgiving
```

```text
include('simpleicons-6/J/Justgiving')
```



| Illustration | Justgiving |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Justgiving.png) | ![illustration for Justgiving](../../simpleicons-6/J/Justgiving.Local.png) |




## Justgiving

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Justgiving
include('simpleicons-6/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label')
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

' loads the Item which embeds the element Justgiving
include('simpleicons-6/J/Justgiving')

' renders the element
Justgiving('Justgiving', 'Justgiving', 'an optional tech label')
@enduml
```

