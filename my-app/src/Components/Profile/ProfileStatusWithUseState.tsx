import React, {ChangeEvent, useEffect, useState} from 'react'
import {ProfilePropsType} from "./ProfileContainer";

const ProfileStatusWithUseState = (props: ProfilePropsType) => {

    useEffect(() => {setStatus(props.status)}, [props.status])

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
        return <div>
            <b>Status: </b>{!editMode && <span onDoubleClick={activatedEditMode}>{status || "---"}</span>}
            {editMode && <input autoFocus onChange={onChangeStatus} onBlur={deActivatedEditMode} value={status}/>}
        </div>
    }
export default ProfileStatusWithUseState