# Boehringeringelheim


```text
simpleicons-6/B/Boehringeringelheim
```

```text
include('simpleicons-6/B/Boehringeringelheim')
```



| Illustration | Boehringeringelheim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Boehringeringelheim.png) | ![illustration for Boehringeringelheim](../../simpleicons-6/B/Boehringeringelheim.Local.png) |




## Boehringeringelheim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Boehringeringelheim
include('simpleicons-6/B/Boehringeringelheim')

' renders the element
Boehringeringelheim('Boehringeringelheim', 'Boehringeringelheim', 'an optional tech label')
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

' loads the Item which embeds the element Boehringeringelheim
include('simpleicons-6/B/Boehringeringelheim')

' renders the element
Boehringeringelheim('Boehringeringelheim', 'Boehringeringelheim', 'an optional tech label')
@enduml
```

