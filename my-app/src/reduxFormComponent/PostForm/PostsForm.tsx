import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostsFormDataType = {
    post: string
}

const PostsReduxForm: React.FC<InjectedFormProps<PostsFormDataType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component = {"textarea"} placeholder={"Tell about you progress today"} name={"post"}/>
        </div>
        <button>Add post</button>
    </form>
}
const PostsForm = reduxForm<PostsFormDataType>({form: "posts"})(PostsReduxForm)

export default PostsForm