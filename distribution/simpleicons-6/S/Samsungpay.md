# Samsungpay


```text
simpleicons-6/S/Samsungpay
```

```text
include('simpleicons-6/S/Samsungpay')
```



| Illustration | Samsungpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Samsungpay.png) | ![illustration for Samsungpay](../../simpleicons-6/S/Samsungpay.Local.png) |




## Samsungpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Samsungpay
include('simpleicons-6/S/Samsungpay')

' renders the element
Samsungpay('Samsungpay', 'Samsungpay', 'an optional tech label')
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

' loads the Item which embeds the element Samsungpay
include('simpleicons-6/S/Samsungpay')

' renders the element
Samsungpay('Samsungpay', 'Samsungpay', 'an optional tech label')
@enduml
```

