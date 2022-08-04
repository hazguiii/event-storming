# Hyundai


```text
simpleicons-6/H/Hyundai
```

```text
include('simpleicons-6/H/Hyundai')
```



| Illustration | Hyundai |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hyundai.png) | ![illustration for Hyundai](../../simpleicons-6/H/Hyundai.Local.png) |




## Hyundai

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hyundai
include('simpleicons-6/H/Hyundai')

' renders the element
Hyundai('Hyundai', 'Hyundai', 'an optional tech label')
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

' loads the Item which embeds the element Hyundai
include('simpleicons-6/H/Hyundai')

' renders the element
Hyundai('Hyundai', 'Hyundai', 'an optional tech label')
@enduml
```

