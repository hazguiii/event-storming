# WhatsappSquare


```text
fontawesome-6/Brands/WhatsappSquare
```

```text
include('fontawesome-6/Brands/WhatsappSquare')
```



| Illustration | WhatsappSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/WhatsappSquare.png) | ![illustration for WhatsappSquare](../../fontawesome-6/Brands/WhatsappSquare.Local.png) |




## WhatsappSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WhatsappSquare
include('fontawesome-6/Brands/WhatsappSquare')

' renders the element
WhatsappSquare('WhatsappSquare', 'Whatsapp Square', 'an optional tech label')
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

' loads the Item which embeds the element WhatsappSquare
include('fontawesome-6/Brands/WhatsappSquare')

' renders the element
WhatsappSquare('WhatsappSquare', 'Whatsapp Square', 'an optional tech label')
@enduml
```

