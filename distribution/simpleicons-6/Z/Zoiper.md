# Zoiper


```text
simpleicons-6/Z/Zoiper
```

```text
include('simpleicons-6/Z/Zoiper')
```



| Illustration | Zoiper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zoiper.png) | ![illustration for Zoiper](../../simpleicons-6/Z/Zoiper.Local.png) |




## Zoiper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zoiper
include('simpleicons-6/Z/Zoiper')

' renders the element
Zoiper('Zoiper', 'Zoiper', 'an optional tech label')
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

' loads the Item which embeds the element Zoiper
include('simpleicons-6/Z/Zoiper')

' renders the element
Zoiper('Zoiper', 'Zoiper', 'an optional tech label')
@enduml
```

