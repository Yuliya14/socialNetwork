import  React from 'react'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const Music = () => {
    return <div>Music</div>
}
const MusicWithAuthRedirect = WithAuthRedirect(Music)
export default MusicWithAuthRedirect