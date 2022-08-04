# HowToReg


```text
material-4/Content/HowToReg
```

```text
include('material-4/Content/HowToReg')
```



| Illustration | HowToReg |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/HowToReg.png) | ![illustration for HowToReg](../../material-4/Content/HowToReg.Local.png) |




## HowToReg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HowToReg
include('material-4/Content/HowToReg')

' renders the element
HowToReg('HowToReg', 'How To Reg', 'an optional tech label')
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

' loads the Item which embeds the element HowToReg
include('material-4/Content/HowToReg')

' renders the element
HowToReg('HowToReg', 'How To Reg', 'an optional tech label')
@enduml
```

