# KingBed


```text
material-4/Social/KingBed
```

```text
include('material-4/Social/KingBed')
```



| Illustration | KingBed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/KingBed.png) | ![illustration for KingBed](../../material-4/Social/KingBed.Local.png) |




## KingBed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KingBed
include('material-4/Social/KingBed')

' renders the element
KingBed('KingBed', 'King Bed', 'an optional tech label')
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

' loads the Item which embeds the element KingBed
include('material-4/Social/KingBed')

' renders the element
KingBed('KingBed', 'King Bed', 'an optional tech label')
@enduml
```

