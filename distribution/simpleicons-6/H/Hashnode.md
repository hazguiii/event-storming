# Hashnode


```text
simpleicons-6/H/Hashnode
```

```text
include('simpleicons-6/H/Hashnode')
```



| Illustration | Hashnode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Hashnode.png) | ![illustration for Hashnode](../../simpleicons-6/H/Hashnode.Local.png) |




## Hashnode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Hashnode
include('simpleicons-6/H/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label')
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

' loads the Item which embeds the element Hashnode
include('simpleicons-6/H/Hashnode')

' renders the element
Hashnode('Hashnode', 'Hashnode', 'an optional tech label')
@enduml
```

