# Gnusocial


```text
simpleicons-6/G/Gnusocial
```

```text
include('simpleicons-6/G/Gnusocial')
```



| Illustration | Gnusocial |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gnusocial.png) | ![illustration for Gnusocial](../../simpleicons-6/G/Gnusocial.Local.png) |




## Gnusocial

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gnusocial
include('simpleicons-6/G/Gnusocial')

' renders the element
Gnusocial('Gnusocial', 'Gnusocial', 'an optional tech label')
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

' loads the Item which embeds the element Gnusocial
include('simpleicons-6/G/Gnusocial')

' renders the element
Gnusocial('Gnusocial', 'Gnusocial', 'an optional tech label')
@enduml
```

