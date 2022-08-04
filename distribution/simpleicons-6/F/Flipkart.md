# Flipkart


```text
simpleicons-6/F/Flipkart
```

```text
include('simpleicons-6/F/Flipkart')
```



| Illustration | Flipkart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Flipkart.png) | ![illustration for Flipkart](../../simpleicons-6/F/Flipkart.Local.png) |




## Flipkart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Flipkart
include('simpleicons-6/F/Flipkart')

' renders the element
Flipkart('Flipkart', 'Flipkart', 'an optional tech label')
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

' loads the Item which embeds the element Flipkart
include('simpleicons-6/F/Flipkart')

' renders the element
Flipkart('Flipkart', 'Flipkart', 'an optional tech label')
@enduml
```

