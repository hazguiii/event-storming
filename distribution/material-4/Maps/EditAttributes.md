# EditAttributes


```text
material-4/Maps/EditAttributes
```

```text
include('material-4/Maps/EditAttributes')
```



| Illustration | EditAttributes |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/EditAttributes.png) | ![illustration for EditAttributes](../../material-4/Maps/EditAttributes.Local.png) |




## EditAttributes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EditAttributes
include('material-4/Maps/EditAttributes')

' renders the element
EditAttributes('EditAttributes', 'Edit Attributes', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element EditAttributes
include('material-4/Maps/EditAttributes')

' renders the element
EditAttributes('EditAttributes', 'Edit Attributes', 'an optional tech label')
@enduml
```

