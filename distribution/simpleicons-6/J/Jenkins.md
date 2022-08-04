# Jenkins


```text
simpleicons-6/J/Jenkins
```

```text
include('simpleicons-6/J/Jenkins')
```



| Illustration | Jenkins |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Jenkins.png) | ![illustration for Jenkins](../../simpleicons-6/J/Jenkins.Local.png) |




## Jenkins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Jenkins
include('simpleicons-6/J/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label')
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

' loads the Item which embeds the element Jenkins
include('simpleicons-6/J/Jenkins')

' renders the element
Jenkins('Jenkins', 'Jenkins', 'an optional tech label')
@enduml
```

