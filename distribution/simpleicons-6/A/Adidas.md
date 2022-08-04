# Adidas


```text
simpleicons-6/A/Adidas
```

```text
include('simpleicons-6/A/Adidas')
```



| Illustration | Adidas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Adidas.png) | ![illustration for Adidas](../../simpleicons-6/A/Adidas.Local.png) |




## Adidas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Adidas
include('simpleicons-6/A/Adidas')

' renders the element
Adidas('Adidas', 'Adidas', 'an optional tech label')
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

' loads the Item which embeds the element Adidas
include('simpleicons-6/A/Adidas')

' renders the element
Adidas('Adidas', 'Adidas', 'an optional tech label')
@enduml
```

