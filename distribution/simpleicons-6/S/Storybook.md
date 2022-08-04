# Storybook


```text
simpleicons-6/S/Storybook
```

```text
include('simpleicons-6/S/Storybook')
```



| Illustration | Storybook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Storybook.png) | ![illustration for Storybook](../../simpleicons-6/S/Storybook.Local.png) |




## Storybook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Storybook
include('simpleicons-6/S/Storybook')

' renders the element
Storybook('Storybook', 'Storybook', 'an optional tech label')
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

' loads the Item which embeds the element Storybook
include('simpleicons-6/S/Storybook')

' renders the element
Storybook('Storybook', 'Storybook', 'an optional tech label')
@enduml
```

