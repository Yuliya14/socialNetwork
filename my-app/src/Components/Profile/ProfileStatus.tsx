import React, {ChangeEvent} from 'react'
import {ProfilePropsType} from "./ProfileContainer";

class ProfileStatus extends React.Component<ProfilePropsType, any>{
    state = {
        editMode: false,
        status: this.props.status
    }
    activatedEditMode = () => {
        this.setState({
           editMode: true

        })
    }
    deActivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render(){
        return <div>
            {!this.state.editMode && <span onDoubleClick={this.activatedEditMode}>{this.state.status || "---"}</span>}
            {this.state.editMode && <input autoFocus onChange={this.onChangeStatus} onBlur={this.deActivatedEditMode} value={this.state.status}/>}
        </div>
    }
}
export default ProfileStatus