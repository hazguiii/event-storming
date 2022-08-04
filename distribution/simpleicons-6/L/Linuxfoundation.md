# Linuxfoundation


```text
simpleicons-6/L/Linuxfoundation
```

```text
include('simpleicons-6/L/Linuxfoundation')
```



| Illustration | Linuxfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Linuxfoundation.png) | ![illustration for Linuxfoundation](../../simpleicons-6/L/Linuxfoundation.Local.png) |




## Linuxfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Linuxfoundation
include('simpleicons-6/L/Linuxfoundation')

' renders the element
Linuxfoundation('Linuxfoundation', 'Linuxfoundation', 'an optional tech label')
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

' loads the Item which embeds the element Linuxfoundation
include('simpleicons-6/L/Linuxfoundation')

' renders the element
Linuxfoundation('Linuxfoundation', 'Linuxfoundation', 'an optional tech label')
@enduml
```

