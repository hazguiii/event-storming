# Wolfram


```text
simpleicons-6/W/Wolfram
```

```text
include('simpleicons-6/W/Wolfram')
```



| Illustration | Wolfram |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wolfram.png) | ![illustration for Wolfram](../../simpleicons-6/W/Wolfram.Local.png) |




## Wolfram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wolfram
include('simpleicons-6/W/Wolfram')

' renders the element
Wolfram('Wolfram', 'Wolfram', 'an optional tech label')
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

' loads the Item which embeds the element Wolfram
include('simpleicons-6/W/Wolfram')

' renders the element
Wolfram('Wolfram', 'Wolfram', 'an optional tech label')
@enduml
```

