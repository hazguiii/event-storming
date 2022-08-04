# SheetPlastic


```text
fontawesome-6/Solid/SheetPlastic
```

```text
include('fontawesome-6/Solid/SheetPlastic')
```



| Illustration | SheetPlastic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SheetPlastic.png) | ![illustration for SheetPlastic](../../fontawesome-6/Solid/SheetPlastic.Local.png) |




## SheetPlastic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SheetPlastic
include('fontawesome-6/Solid/SheetPlastic')

' renders the element
SheetPlastic('SheetPlastic', 'Sheet Plastic', 'an optional tech label')
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

' loads the Item which embeds the element SheetPlastic
include('fontawesome-6/Solid/SheetPlastic')

' renders the element
SheetPlastic('SheetPlastic', 'Sheet Plastic', 'an optional tech label')
@enduml
```

