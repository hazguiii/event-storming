# Razorpay


```text
simpleicons-6/R/Razorpay
```

```text
include('simpleicons-6/R/Razorpay')
```



| Illustration | Razorpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Razorpay.png) | ![illustration for Razorpay](../../simpleicons-6/R/Razorpay.Local.png) |




## Razorpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Razorpay
include('simpleicons-6/R/Razorpay')

' renders the element
Razorpay('Razorpay', 'Razorpay', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Razorpay
include('simpleicons-6/R/Razorpay')

' renders the element
Razorpay('Razorpay', 'Razorpay', 'an optional tech label')
@enduml
```

