# Streamlit


```text
simpleicons-6/S/Streamlit
```

```text
include('simpleicons-6/S/Streamlit')
```



| Illustration | Streamlit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Streamlit.png) | ![illustration for Streamlit](../../simpleicons-6/S/Streamlit.Local.png) |




## Streamlit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Streamlit
include('simpleicons-6/S/Streamlit')

' renders the element
Streamlit('Streamlit', 'Streamlit', 'an optional tech label')
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

' loads the Item which embeds the element Streamlit
include('simpleicons-6/S/Streamlit')

' renders the element
Streamlit('Streamlit', 'Streamlit', 'an optional tech label')
@enduml
```

