# Vulkan


```text
simpleicons-6/V/Vulkan
```

```text
include('simpleicons-6/V/Vulkan')
```



| Illustration | Vulkan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Vulkan.png) | ![illustration for Vulkan](../../simpleicons-6/V/Vulkan.Local.png) |




## Vulkan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Vulkan
include('simpleicons-6/V/Vulkan')

' renders the element
Vulkan('Vulkan', 'Vulkan', 'an optional tech label')
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

' loads the Item which embeds the element Vulkan
include('simpleicons-6/V/Vulkan')

' renders the element
Vulkan('Vulkan', 'Vulkan', 'an optional tech label')
@enduml
```

