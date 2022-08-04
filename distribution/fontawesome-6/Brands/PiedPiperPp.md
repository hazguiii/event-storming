# PiedPiperPp


```text
fontawesome-6/Brands/PiedPiperPp
```

```text
include('fontawesome-6/Brands/PiedPiperPp')
```



| Illustration | PiedPiperPp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/PiedPiperPp.png) | ![illustration for PiedPiperPp](../../fontawesome-6/Brands/PiedPiperPp.Local.png) |




## PiedPiperPp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PiedPiperPp
include('fontawesome-6/Brands/PiedPiperPp')

' renders the element
PiedPiperPp('PiedPiperPp', 'Pied Piper Pp', 'an optional tech label')
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

' loads the Item which embeds the element PiedPiperPp
include('fontawesome-6/Brands/PiedPiperPp')

' renders the element
PiedPiperPp('PiedPiperPp', 'Pied Piper Pp', 'an optional tech label')
@enduml
```

