# CommentBank


```text
material-4/Action/CommentBank
```

```text
include('material-4/Action/CommentBank')
```



| Illustration | CommentBank |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CommentBank.png) | ![illustration for CommentBank](../../material-4/Action/CommentBank.Local.png) |




## CommentBank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CommentBank
include('material-4/Action/CommentBank')

' renders the element
CommentBank('CommentBank', 'Comment Bank', 'an optional tech label')
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

' loads the Item which embeds the element CommentBank
include('material-4/Action/CommentBank')

' renders the element
CommentBank('CommentBank', 'Comment Bank', 'an optional tech label')
@enduml
```

