# YoutubeSquare


```text
fontawesome-6/Brands/YoutubeSquare
```

```text
include('fontawesome-6/Brands/YoutubeSquare')
```



| Illustration | YoutubeSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/YoutubeSquare.png) | ![illustration for YoutubeSquare](../../fontawesome-6/Brands/YoutubeSquare.Local.png) |




## YoutubeSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element YoutubeSquare
include('fontawesome-6/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label')
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

' loads the Item which embeds the element YoutubeSquare
include('fontawesome-6/Brands/YoutubeSquare')

' renders the element
YoutubeSquare('YoutubeSquare', 'Youtube Square', 'an optional tech label')
@enduml
```

