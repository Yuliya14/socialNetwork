import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type MessageFormType = {
    message: string
}
const MessageReduxForm: React.FC<InjectedFormProps<MessageFormType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} placeholder={"Enter you message"} name={"message"}/>
        <button>Add message</button>
    </form>
}
const MessageForm = reduxForm<MessageFormType>({form: "message"})(MessageReduxForm)

export default MessageForm