import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import img1 from '../../../Img/ava_women_1.png'
import img2 from '../../../Img/ava_men_1.jpg'
import img3 from '../../../Img/ava_women_2.png'

const Posts = () => {
    let postsData = [
        {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
        {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
        {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}
    ]
    return <div className={s.Posts}>
        <div>
            <div><textarea placeholder={"Tell about you progress today"}></textarea></div>
            <button>Add post</button>
        </div>
        {postsData.map(p => <Post id = {p.id} imgUrl = {p.imgUrl} message = {p.message} likesCount = {p.likesCount}/>)}
    </div>
}
export default Posts;
