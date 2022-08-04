# Vfairs


```text
simpleicons-6/V/Vfairs
```

```text
include('simpleicons-6/V/Vfairs')
```



| Illustration | Vfairs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vfairs.png) | ![illustration for Vfairs](../../simpleicons-6/V/Vfairs.Local.png) |




## Vfairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vfairs
include('simpleicons-6/V/Vfairs')

' renders the element
Vfairs('Vfairs', 'Vfairs', 'an optional tech label')
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

' loads the Item which embeds the element Vfairs
include('simpleicons-6/V/Vfairs')

' renders the element
Vfairs('Vfairs', 'Vfairs', 'an optional tech label')
@enduml
```

