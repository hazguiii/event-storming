# PiedPiperSquare


```text
fontawesome-6/Brands/PiedPiperSquare
```

```text
include('fontawesome-6/Brands/PiedPiperSquare')
```



| Illustration | PiedPiperSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/PiedPiperSquare.png) | ![illustration for PiedPiperSquare](../../fontawesome-6/Brands/PiedPiperSquare.Local.png) |




## PiedPiperSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome-6/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label')
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

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome-6/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label')
@enduml
```

