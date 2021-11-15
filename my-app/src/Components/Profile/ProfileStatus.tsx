import React, {ChangeEvent} from 'react'
import {ProfilePropsType} from "./ProfileContainer";
type stateType = {
    editMode: boolean
    status: string
}
class ProfileStatus extends React.Component<ProfilePropsType, stateType>{
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
    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<stateType>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return <div>
            {!this.state.editMode && <span onDoubleClick={this.activatedEditMode}>{this.state.status || "---"}</span>}
            {this.state.editMode && <input autoFocus onChange={this.onChangeStatus} onBlur={this.deActivatedEditMode} value={this.state.status}/>}
        </div>
    }
}
export default ProfileStatus