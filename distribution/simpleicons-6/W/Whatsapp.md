# Whatsapp


```text
simpleicons-6/W/Whatsapp
```

```text
include('simpleicons-6/W/Whatsapp')
```



| Illustration | Whatsapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Whatsapp.png) | ![illustration for Whatsapp](../../simpleicons-6/W/Whatsapp.Local.png) |




## Whatsapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Whatsapp
include('simpleicons-6/W/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label')
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

' loads the Item which embeds the element Whatsapp
include('simpleicons-6/W/Whatsapp')

' renders the element
Whatsapp('Whatsapp', 'Whatsapp', 'an optional tech label')
@enduml
```

