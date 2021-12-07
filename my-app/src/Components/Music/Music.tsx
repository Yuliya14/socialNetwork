import  React from 'react'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const Music = React.memo(() => {
    return <div>Music</div>
})
const MusicWithAuthRedirect = WithAuthRedirect(Music)
export default MusicWithAuthRedirect