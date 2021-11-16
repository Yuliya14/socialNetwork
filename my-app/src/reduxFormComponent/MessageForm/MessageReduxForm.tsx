import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {required, maxCountOfSymbols} from "../Validator/ValidatorForm";
import {Textarea} from "../../Components/common/Form";

export type MessageFormType = {
    message: string
}
const maxLength300 = maxCountOfSymbols(300)

const MessageReduxForm: React.FC<InjectedFormProps<MessageFormType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} validate = {[required, maxLength300]} placeholder={"Enter you message"} name={"message"}/>
        <button>Add message</button>
    </form>
}
const MessageForm = reduxForm<MessageFormType>({form: "message"})(MessageReduxForm)

export default MessageForm