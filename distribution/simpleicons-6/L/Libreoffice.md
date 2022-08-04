# Libreoffice


```text
simpleicons-6/L/Libreoffice
```

```text
include('simpleicons-6/L/Libreoffice')
```



| Illustration | Libreoffice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Libreoffice.png) | ![illustration for Libreoffice](../../simpleicons-6/L/Libreoffice.Local.png) |




## Libreoffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Libreoffice
include('simpleicons-6/L/Libreoffice')

' renders the element
Libreoffice('Libreoffice', 'Libreoffice', 'an optional tech label')
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

' loads the Item which embeds the element Libreoffice
include('simpleicons-6/L/Libreoffice')

' renders the element
Libreoffice('Libreoffice', 'Libreoffice', 'an optional tech label')
@enduml
```

