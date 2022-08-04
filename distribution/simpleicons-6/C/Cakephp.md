# Cakephp


```text
simpleicons-6/C/Cakephp
```

```text
include('simpleicons-6/C/Cakephp')
```



| Illustration | Cakephp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cakephp.png) | ![illustration for Cakephp](../../simpleicons-6/C/Cakephp.Local.png) |




## Cakephp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cakephp
include('simpleicons-6/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label')
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

' loads the Item which embeds the element Cakephp
include('simpleicons-6/C/Cakephp')

' renders the element
Cakephp('Cakephp', 'Cakephp', 'an optional tech label')
@enduml
```

