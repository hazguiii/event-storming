# Conekta


```text
simpleicons-6/C/Conekta
```

```text
include('simpleicons-6/C/Conekta')
```



| Illustration | Conekta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Conekta.png) | ![illustration for Conekta](../../simpleicons-6/C/Conekta.Local.png) |




## Conekta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Conekta
include('simpleicons-6/C/Conekta')

' renders the element
Conekta('Conekta', 'Conekta', 'an optional tech label')
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

' loads the Item which embeds the element Conekta
include('simpleicons-6/C/Conekta')

' renders the element
Conekta('Conekta', 'Conekta', 'an optional tech label')
@enduml
```

