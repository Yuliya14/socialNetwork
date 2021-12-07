import  React from 'react'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const Settings = React.memo(() => {
    return <div>Settings</div>
})
const SettingsWithAuthRedirect = WithAuthRedirect(Settings)
export default SettingsWithAuthRedirect