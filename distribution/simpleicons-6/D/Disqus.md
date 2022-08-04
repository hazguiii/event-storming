# Disqus


```text
simpleicons-6/D/Disqus
```

```text
include('simpleicons-6/D/Disqus')
```



| Illustration | Disqus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Disqus.png) | ![illustration for Disqus](../../simpleicons-6/D/Disqus.Local.png) |




## Disqus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Disqus
include('simpleicons-6/D/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label')
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

' loads the Item which embeds the element Disqus
include('simpleicons-6/D/Disqus')

' renders the element
Disqus('Disqus', 'Disqus', 'an optional tech label')
@enduml
```

