# Nestjs


```text
simpleicons-6/N/Nestjs
```

```text
include('simpleicons-6/N/Nestjs')
```



| Illustration | Nestjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Nestjs.png) | ![illustration for Nestjs](../../simpleicons-6/N/Nestjs.Local.png) |




## Nestjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Nestjs
include('simpleicons-6/N/Nestjs')

' renders the element
Nestjs('Nestjs', 'Nestjs', 'an optional tech label')
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

' loads the Item which embeds the element Nestjs
include('simpleicons-6/N/Nestjs')

' renders the element
Nestjs('Nestjs', 'Nestjs', 'an optional tech label')
@enduml
```

