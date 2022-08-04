# Trustpilot


```text
simpleicons-6/T/Trustpilot
```

```text
include('simpleicons-6/T/Trustpilot')
```



| Illustration | Trustpilot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Trustpilot.png) | ![illustration for Trustpilot](../../simpleicons-6/T/Trustpilot.Local.png) |




## Trustpilot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Trustpilot
include('simpleicons-6/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label')
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

' loads the Item which embeds the element Trustpilot
include('simpleicons-6/T/Trustpilot')

' renders the element
Trustpilot('Trustpilot', 'Trustpilot', 'an optional tech label')
@enduml
```

