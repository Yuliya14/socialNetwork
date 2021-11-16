import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Components/common/Form";
import {maxCountOfSymbols, required} from "../Validator/ValidatorForm";


export type PostsFormDataType = {
    post: string
}
const maxSymbol800 = maxCountOfSymbols(800)
const PostsReduxForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props: any) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component = {Textarea} validate = {[required, maxSymbol800]} placeholder={"Tell about you progress today"} name={"post"}/>
        </div>
        <button>Add post</button>
    </form>
}
const PostsForm = reduxForm<PostsFormDataType>({form: "posts"})(PostsReduxForm)

export default PostsForm