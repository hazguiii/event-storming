# Sumologic


```text
simpleicons-6/S/Sumologic
```

```text
include('simpleicons-6/S/Sumologic')
```



| Illustration | Sumologic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sumologic.png) | ![illustration for Sumologic](../../simpleicons-6/S/Sumologic.Local.png) |




## Sumologic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sumologic
include('simpleicons-6/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label')
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

' loads the Item which embeds the element Sumologic
include('simpleicons-6/S/Sumologic')

' renders the element
Sumologic('Sumologic', 'Sumologic', 'an optional tech label')
@enduml
```

