# Pixabay


```text
simpleicons-6/P/Pixabay
```

```text
include('simpleicons-6/P/Pixabay')
```



| Illustration | Pixabay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pixabay.png) | ![illustration for Pixabay](../../simpleicons-6/P/Pixabay.Local.png) |




## Pixabay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pixabay
include('simpleicons-6/P/Pixabay')

' renders the element
Pixabay('Pixabay', 'Pixabay', 'an optional tech label')
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

' loads the Item which embeds the element Pixabay
include('simpleicons-6/P/Pixabay')

' renders the element
Pixabay('Pixabay', 'Pixabay', 'an optional tech label')
@enduml
```

