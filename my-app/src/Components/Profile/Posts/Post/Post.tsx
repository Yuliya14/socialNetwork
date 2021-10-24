import React from "react";
import s from "./Post.module.css";
import like from '../../../../Img/like.png'

type PostType = {
    imgUrl: string
    message: string
    likesCount: number
}
const Post = (props: PostType) => {
    return <div className={s.item}>

        <img src = {props.imgUrl}/>
        <div>{props.message}</div>
        <div>{props.likesCount}<img style={{width: "14px", height: "14px"}} src={like}/></div>

    </div>
}
export default Post;