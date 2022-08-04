# Gameandwatch


```text
simpleicons-6/G/Gameandwatch
```

```text
include('simpleicons-6/G/Gameandwatch')
```



| Illustration | Gameandwatch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gameandwatch.png) | ![illustration for Gameandwatch](../../simpleicons-6/G/Gameandwatch.Local.png) |




## Gameandwatch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gameandwatch
include('simpleicons-6/G/Gameandwatch')

' renders the element
Gameandwatch('Gameandwatch', 'Gameandwatch', 'an optional tech label')
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

' loads the Item which embeds the element Gameandwatch
include('simpleicons-6/G/Gameandwatch')

' renders the element
Gameandwatch('Gameandwatch', 'Gameandwatch', 'an optional tech label')
@enduml
```

