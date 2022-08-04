# Dart


```text
simpleicons-6/D/Dart
```

```text
include('simpleicons-6/D/Dart')
```



| Illustration | Dart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Dart.png) | ![illustration for Dart](../../simpleicons-6/D/Dart.Local.png) |




## Dart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Dart
include('simpleicons-6/D/Dart')

' renders the element
Dart('Dart', 'Dart', 'an optional tech label')
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

' loads the Item which embeds the element Dart
include('simpleicons-6/D/Dart')

' renders the element
Dart('Dart', 'Dart', 'an optional tech label')
@enduml
```

