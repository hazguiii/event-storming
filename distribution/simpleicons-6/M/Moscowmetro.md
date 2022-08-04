# Moscowmetro


```text
simpleicons-6/M/Moscowmetro
```

```text
include('simpleicons-6/M/Moscowmetro')
```



| Illustration | Moscowmetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Moscowmetro.png) | ![illustration for Moscowmetro](../../simpleicons-6/M/Moscowmetro.Local.png) |




## Moscowmetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Moscowmetro
include('simpleicons-6/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label')
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

' loads the Item which embeds the element Moscowmetro
include('simpleicons-6/M/Moscowmetro')

' renders the element
Moscowmetro('Moscowmetro', 'Moscowmetro', 'an optional tech label')
@enduml
```

