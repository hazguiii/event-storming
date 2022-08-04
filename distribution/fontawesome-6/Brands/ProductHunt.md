# ProductHunt


```text
fontawesome-6/Brands/ProductHunt
```

```text
include('fontawesome-6/Brands/ProductHunt')
```



| Illustration | ProductHunt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/ProductHunt.png) | ![illustration for ProductHunt](../../fontawesome-6/Brands/ProductHunt.Local.png) |




## ProductHunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ProductHunt
include('fontawesome-6/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label')
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

' loads the Item which embeds the element ProductHunt
include('fontawesome-6/Brands/ProductHunt')

' renders the element
ProductHunt('ProductHunt', 'Product Hunt', 'an optional tech label')
@enduml
```

