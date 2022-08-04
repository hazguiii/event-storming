# VpnKey


```text
material-4/Communication/VpnKey
```

```text
include('material-4/Communication/VpnKey')
```



| Illustration | VpnKey |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/VpnKey.png) | ![illustration for VpnKey](../../material-4/Communication/VpnKey.Local.png) |




## VpnKey

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VpnKey
include('material-4/Communication/VpnKey')

' renders the element
VpnKey('VpnKey', 'Vpn Key', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element VpnKey
include('material-4/Communication/VpnKey')

' renders the element
VpnKey('VpnKey', 'Vpn Key', 'an optional tech label')
@enduml
```

