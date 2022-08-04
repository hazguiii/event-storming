# Googlecloud


```text
simpleicons-6/G/Googlecloud
```

```text
include('simpleicons-6/G/Googlecloud')
```



| Illustration | Googlecloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlecloud.png) | ![illustration for Googlecloud](../../simpleicons-6/G/Googlecloud.Local.png) |




## Googlecloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlecloud
include('simpleicons-6/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label')
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

' loads the Item which embeds the element Googlecloud
include('simpleicons-6/G/Googlecloud')

' renders the element
Googlecloud('Googlecloud', 'Googlecloud', 'an optional tech label')
@enduml
```

