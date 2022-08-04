# Kaggle


```text
simpleicons-6/K/Kaggle
```

```text
include('simpleicons-6/K/Kaggle')
```



| Illustration | Kaggle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kaggle.png) | ![illustration for Kaggle](../../simpleicons-6/K/Kaggle.Local.png) |




## Kaggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kaggle
include('simpleicons-6/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label')
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

' loads the Item which embeds the element Kaggle
include('simpleicons-6/K/Kaggle')

' renders the element
Kaggle('Kaggle', 'Kaggle', 'an optional tech label')
@enduml
```

