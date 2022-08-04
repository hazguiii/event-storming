# TextHeight


```text
fontawesome-6/Solid/TextHeight
```

```text
include('fontawesome-6/Solid/TextHeight')
```



| Illustration | TextHeight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TextHeight.png) | ![illustration for TextHeight](../../fontawesome-6/Solid/TextHeight.Local.png) |




## TextHeight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TextHeight
include('fontawesome-6/Solid/TextHeight')

' renders the element
TextHeight('TextHeight', 'Text Height', 'an optional tech label')
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

' loads the Item which embeds the element TextHeight
include('fontawesome-6/Solid/TextHeight')

' renders the element
TextHeight('TextHeight', 'Text Height', 'an optional tech label')
@enduml
```

