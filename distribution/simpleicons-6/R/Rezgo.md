# Rezgo


```text
simpleicons-6/R/Rezgo
```

```text
include('simpleicons-6/R/Rezgo')
```



| Illustration | Rezgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rezgo.png) | ![illustration for Rezgo](../../simpleicons-6/R/Rezgo.Local.png) |




## Rezgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rezgo
include('simpleicons-6/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label')
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

' loads the Item which embeds the element Rezgo
include('simpleicons-6/R/Rezgo')

' renders the element
Rezgo('Rezgo', 'Rezgo', 'an optional tech label')
@enduml
```

