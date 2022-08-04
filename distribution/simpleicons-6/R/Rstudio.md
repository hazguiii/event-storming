# Rstudio


```text
simpleicons-6/R/Rstudio
```

```text
include('simpleicons-6/R/Rstudio')
```



| Illustration | Rstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rstudio.png) | ![illustration for Rstudio](../../simpleicons-6/R/Rstudio.Local.png) |




## Rstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rstudio
include('simpleicons-6/R/Rstudio')

' renders the element
Rstudio('Rstudio', 'Rstudio', 'an optional tech label')
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

' loads the Item which embeds the element Rstudio
include('simpleicons-6/R/Rstudio')

' renders the element
Rstudio('Rstudio', 'Rstudio', 'an optional tech label')
@enduml
```

