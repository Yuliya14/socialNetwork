import React from 'react'

class ProfileStatus extends React.Component<any, any>{
    state = {
        editMode: false
    }
    activatedEditMode() {
        this.setState({
           editMode: true
        })
    }
    deActivatedEditMode() {
        this.setState({
            editMode: false
        })
    }
    render(){
        return <div>
            {!this.state.editMode && <span onDoubleClick={this.activatedEditMode.bind(this)}>SomeStatus</span>}
            {this.state.editMode && <input autoFocus onBlur={this.deActivatedEditMode.bind(this)} value={"SomeStatus"}/>}
        </div>
    }
}
export default ProfileStatus