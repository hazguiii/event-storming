# Nvidia


```text
simpleicons-6/N/Nvidia
```

```text
include('simpleicons-6/N/Nvidia')
```



| Illustration | Nvidia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nvidia.png) | ![illustration for Nvidia](../../simpleicons-6/N/Nvidia.Local.png) |




## Nvidia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nvidia
include('simpleicons-6/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label')
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

' loads the Item which embeds the element Nvidia
include('simpleicons-6/N/Nvidia')

' renders the element
Nvidia('Nvidia', 'Nvidia', 'an optional tech label')
@enduml
```

