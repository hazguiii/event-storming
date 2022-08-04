# Stripe


```text
fontawesome-6/Brands/Stripe
```

```text
include('fontawesome-6/Brands/Stripe')
```



| Illustration | Stripe |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Stripe.png) | ![illustration for Stripe](../../fontawesome-6/Brands/Stripe.Local.png) |




## Stripe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stripe
include('fontawesome-6/Brands/Stripe')

' renders the element
Stripe('Stripe', 'Stripe', 'an optional tech label')
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

' loads the Item which embeds the element Stripe
include('fontawesome-6/Brands/Stripe')

' renders the element
Stripe('Stripe', 'Stripe', 'an optional tech label')
@enduml
```

