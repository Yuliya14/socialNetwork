import {addMessageAC, changeMessageTextAC, dialogsPageType} from "../../redux/message-reducer";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";



type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
type mapStateToDispatchType = {
    addMessageCallBack: (messageText: string) => void
    changeMessageTextCallBack: (newMessageText: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapStateToDispatchType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage,
    }
}
const DialogsWithAuthRedirect = WithAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, {
    addMessageCallBack: addMessageAC,
    changeMessageTextCallBack: changeMessageTextAC
})(DialogsWithAuthRedirect)

export default DialogsContainer