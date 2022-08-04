# GooglePlay


```text
fontawesome-6/Brands/GooglePlay
```

```text
include('fontawesome-6/Brands/GooglePlay')
```



| Illustration | GooglePlay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GooglePlay.png) | ![illustration for GooglePlay](../../fontawesome-6/Brands/GooglePlay.Local.png) |




## GooglePlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GooglePlay
include('fontawesome-6/Brands/GooglePlay')

' renders the element
GooglePlay('GooglePlay', 'Google Play', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GooglePlay
include('fontawesome-6/Brands/GooglePlay')

' renders the element
GooglePlay('GooglePlay', 'Google Play', 'an optional tech label')
@enduml
```

