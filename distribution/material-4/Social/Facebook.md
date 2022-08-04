# Facebook


```text
material-4/Social/Facebook
```

```text
include('material-4/Social/Facebook')
```



| Illustration | Facebook |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Facebook.png) | ![illustration for Facebook](../../material-4/Social/Facebook.Local.png) |




## Facebook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Facebook
include('material-4/Social/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label')
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

' loads the Item which embeds the element Facebook
include('material-4/Social/Facebook')

' renders the element
Facebook('Facebook', 'Facebook', 'an optional tech label')
@enduml
```

