# Usps


```text
simpleicons-6/U/Usps
```

```text
include('simpleicons-6/U/Usps')
```



| Illustration | Usps |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Usps.png) | ![illustration for Usps](../../simpleicons-6/U/Usps.Local.png) |




## Usps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Usps
include('simpleicons-6/U/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label')
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

' loads the Item which embeds the element Usps
include('simpleicons-6/U/Usps')

' renders the element
Usps('Usps', 'Usps', 'an optional tech label')
@enduml
```

