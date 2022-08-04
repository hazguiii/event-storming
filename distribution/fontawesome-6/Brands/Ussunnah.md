# Ussunnah


```text
fontawesome-6/Brands/Ussunnah
```

```text
include('fontawesome-6/Brands/Ussunnah')
```



| Illustration | Ussunnah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ussunnah.png) | ![illustration for Ussunnah](../../fontawesome-6/Brands/Ussunnah.Local.png) |




## Ussunnah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ussunnah
include('fontawesome-6/Brands/Ussunnah')

' renders the element
Ussunnah('Ussunnah', 'Ussunnah', 'an optional tech label')
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

' loads the Item which embeds the element Ussunnah
include('fontawesome-6/Brands/Ussunnah')

' renders the element
Ussunnah('Ussunnah', 'Ussunnah', 'an optional tech label')
@enduml
```

