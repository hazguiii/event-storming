# ServiceDataShareInvitations


```text
azure-4/Item/Storage/ServiceDataShareInvitations
```

```text
include('azure-4/Item/Storage/ServiceDataShareInvitations')
```



| Illustration | ServiceDataShareInvitations | ServiceDataShareInvitationsCard | ServiceDataShareInvitationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Storage/ServiceDataShareInvitations.png) | ![illustration for ServiceDataShareInvitations](../../../azure-4/Item/Storage/ServiceDataShareInvitations.Local.png) | ![illustration for ServiceDataShareInvitationsCard](../../../azure-4/Item/Storage/ServiceDataShareInvitationsCard.Local.png) | ![illustration for ServiceDataShareInvitationsGroup](../../../azure-4/Item/Storage/ServiceDataShareInvitationsGroup.Local.png) |




## ServiceDataShareInvitations

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitations
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitations('ServiceDataShareInvitations', 'Service Data Share Invitations', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitations
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitations('ServiceDataShareInvitations', 'Service Data Share Invitations', 'an optional tech label')
@enduml
```

## ServiceDataShareInvitationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitationsCard
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitationsCard('ServiceDataShareInvitationsCard', 'Service Data Share Invitations Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitationsCard
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitationsCard('ServiceDataShareInvitationsCard', 'Service Data Share Invitations Card', 'an optional description')
@enduml
```

## ServiceDataShareInvitationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitationsGroup
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitationsGroup('ServiceDataShareInvitationsGroup', 'Service Data Share Invitations Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataShareInvitationsGroup
include('azure-4/Item/Storage/ServiceDataShareInvitations')

' renders the element
ServiceDataShareInvitationsGroup('ServiceDataShareInvitationsGroup', 'Service Data Share Invitations Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

