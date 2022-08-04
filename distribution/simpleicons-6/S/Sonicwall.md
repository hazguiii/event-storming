# Sonicwall


```text
simpleicons-6/S/Sonicwall
```

```text
include('simpleicons-6/S/Sonicwall')
```



| Illustration | Sonicwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sonicwall.png) | ![illustration for Sonicwall](../../simpleicons-6/S/Sonicwall.Local.png) |




## Sonicwall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sonicwall
include('simpleicons-6/S/Sonicwall')

' renders the element
Sonicwall('Sonicwall', 'Sonicwall', 'an optional tech label')
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

' loads the Item which embeds the element Sonicwall
include('simpleicons-6/S/Sonicwall')

' renders the element
Sonicwall('Sonicwall', 'Sonicwall', 'an optional tech label')
@enduml
```

