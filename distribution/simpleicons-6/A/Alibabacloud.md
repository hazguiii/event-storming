# Alibabacloud


```text
simpleicons-6/A/Alibabacloud
```

```text
include('simpleicons-6/A/Alibabacloud')
```



| Illustration | Alibabacloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Alibabacloud.png) | ![illustration for Alibabacloud](../../simpleicons-6/A/Alibabacloud.Local.png) |




## Alibabacloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Alibabacloud
include('simpleicons-6/A/Alibabacloud')

' renders the element
Alibabacloud('Alibabacloud', 'Alibabacloud', 'an optional tech label')
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

' loads the Item which embeds the element Alibabacloud
include('simpleicons-6/A/Alibabacloud')

' renders the element
Alibabacloud('Alibabacloud', 'Alibabacloud', 'an optional tech label')
@enduml
```

