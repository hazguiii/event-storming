# Topcoder


```text
simpleicons-6/T/Topcoder
```

```text
include('simpleicons-6/T/Topcoder')
```



| Illustration | Topcoder |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Topcoder.png) | ![illustration for Topcoder](../../simpleicons-6/T/Topcoder.Local.png) |




## Topcoder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Topcoder
include('simpleicons-6/T/Topcoder')

' renders the element
Topcoder('Topcoder', 'Topcoder', 'an optional tech label')
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

' loads the Item which embeds the element Topcoder
include('simpleicons-6/T/Topcoder')

' renders the element
Topcoder('Topcoder', 'Topcoder', 'an optional tech label')
@enduml
```

