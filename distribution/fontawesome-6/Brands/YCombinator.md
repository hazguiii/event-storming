# YCombinator


```text
fontawesome-6/Brands/YCombinator
```

```text
include('fontawesome-6/Brands/YCombinator')
```



| Illustration | YCombinator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/YCombinator.png) | ![illustration for YCombinator](../../fontawesome-6/Brands/YCombinator.Local.png) |




## YCombinator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element YCombinator
include('fontawesome-6/Brands/YCombinator')

' renders the element
YCombinator('YCombinator', 'Y Combinator', 'an optional tech label')
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

' loads the Item which embeds the element YCombinator
include('fontawesome-6/Brands/YCombinator')

' renders the element
YCombinator('YCombinator', 'Y Combinator', 'an optional tech label')
@enduml
```

