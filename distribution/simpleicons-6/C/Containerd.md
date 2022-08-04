# Containerd


```text
simpleicons-6/C/Containerd
```

```text
include('simpleicons-6/C/Containerd')
```



| Illustration | Containerd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Containerd.png) | ![illustration for Containerd](../../simpleicons-6/C/Containerd.Local.png) |




## Containerd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Containerd
include('simpleicons-6/C/Containerd')

' renders the element
Containerd('Containerd', 'Containerd', 'an optional tech label')
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

' loads the Item which embeds the element Containerd
include('simpleicons-6/C/Containerd')

' renders the element
Containerd('Containerd', 'Containerd', 'an optional tech label')
@enduml
```

