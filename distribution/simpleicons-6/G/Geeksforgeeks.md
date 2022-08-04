# Geeksforgeeks


```text
simpleicons-6/G/Geeksforgeeks
```

```text
include('simpleicons-6/G/Geeksforgeeks')
```



| Illustration | Geeksforgeeks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Geeksforgeeks.png) | ![illustration for Geeksforgeeks](../../simpleicons-6/G/Geeksforgeeks.Local.png) |




## Geeksforgeeks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Geeksforgeeks
include('simpleicons-6/G/Geeksforgeeks')

' renders the element
Geeksforgeeks('Geeksforgeeks', 'Geeksforgeeks', 'an optional tech label')
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

' loads the Item which embeds the element Geeksforgeeks
include('simpleicons-6/G/Geeksforgeeks')

' renders the element
Geeksforgeeks('Geeksforgeeks', 'Geeksforgeeks', 'an optional tech label')
@enduml
```

