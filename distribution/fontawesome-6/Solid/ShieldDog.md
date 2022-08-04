# ShieldDog


```text
fontawesome-6/Solid/ShieldDog
```

```text
include('fontawesome-6/Solid/ShieldDog')
```



| Illustration | ShieldDog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShieldDog.png) | ![illustration for ShieldDog](../../fontawesome-6/Solid/ShieldDog.Local.png) |




## ShieldDog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShieldDog
include('fontawesome-6/Solid/ShieldDog')

' renders the element
ShieldDog('ShieldDog', 'Shield Dog', 'an optional tech label')
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

' loads the Item which embeds the element ShieldDog
include('fontawesome-6/Solid/ShieldDog')

' renders the element
ShieldDog('ShieldDog', 'Shield Dog', 'an optional tech label')
@enduml
```

