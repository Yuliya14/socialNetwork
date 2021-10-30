import React from "react";
import {addPostAC, changePostTextAC} from "../../../redux/post-reducer";
import Posts from "./Posts";
import StoreContext from "../../../redux/contextAPI";

type PostsContainerPropsType = {}

const PostsContainer = (props: PostsContainerPropsType) => {

    return <StoreContext.Consumer>
        {(state) => {
            const addPost = (postText: string) => state.dispatch(addPostAC(postText))
            const changePostText = (newPostText: string) => state.dispatch(changePostTextAC(newPostText))

            return <Posts profilePage={state.getState().ProfilePage}
                          addPost={addPost} changePostText={changePostText}/>
        }
        }
    </StoreContext.Consumer>
}

export default PostsContainer;
