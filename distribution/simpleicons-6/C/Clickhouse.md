# Clickhouse


```text
simpleicons-6/C/Clickhouse
```

```text
include('simpleicons-6/C/Clickhouse')
```



| Illustration | Clickhouse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Clickhouse.png) | ![illustration for Clickhouse](../../simpleicons-6/C/Clickhouse.Local.png) |




## Clickhouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clickhouse
include('simpleicons-6/C/Clickhouse')

' renders the element
Clickhouse('Clickhouse', 'Clickhouse', 'an optional tech label')
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

' loads the Item which embeds the element Clickhouse
include('simpleicons-6/C/Clickhouse')

' renders the element
Clickhouse('Clickhouse', 'Clickhouse', 'an optional tech label')
@enduml
```

