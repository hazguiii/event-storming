# Asus


```text
simpleicons-6/A/Asus
```

```text
include('simpleicons-6/A/Asus')
```



| Illustration | Asus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Asus.png) | ![illustration for Asus](../../simpleicons-6/A/Asus.Local.png) |




## Asus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Asus
include('simpleicons-6/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label')
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

' loads the Item which embeds the element Asus
include('simpleicons-6/A/Asus')

' renders the element
Asus('Asus', 'Asus', 'an optional tech label')
@enduml
```

