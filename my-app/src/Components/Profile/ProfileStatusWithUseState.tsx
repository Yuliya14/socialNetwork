import React, {ChangeEvent, useState} from 'react'
import {ProfilePropsType} from "./ProfileContainer";

const ProfileStatusWithUseState = (props: ProfilePropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
        return <div>
            {!editMode && <span onDoubleClick={activatedEditMode}>{status || "---"}</span>}
            {editMode && <input autoFocus onChange={onChangeStatus} onBlur={deActivatedEditMode} value={status}/>}
        </div>
    }
export default ProfileStatusWithUseState