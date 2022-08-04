# Gifts


```text
fontawesome-6/Solid/Gifts
```

```text
include('fontawesome-6/Solid/Gifts')
```



| Illustration | Gifts |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gifts.png) | ![illustration for Gifts](../../fontawesome-6/Solid/Gifts.Local.png) |




## Gifts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gifts
include('fontawesome-6/Solid/Gifts')

' renders the element
Gifts('Gifts', 'Gifts', 'an optional tech label')
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

' loads the Item which embeds the element Gifts
include('fontawesome-6/Solid/Gifts')

' renders the element
Gifts('Gifts', 'Gifts', 'an optional tech label')
@enduml
```

