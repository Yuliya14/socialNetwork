import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import img1 from '../../../Img/ava_women_1.png'
import img2 from '../../../Img/ava_men_1.jpg'
import img3 from '../../../Img/ava_women_2.png'

const Posts = () => {
    return <div>
        <div>
            <textarea placeholder={"Tell about you progress today"}></textarea>
            <button>Add post</button>
        </div>
        <Post imgUrl = {img1} message = {"Hello!"} likesCount = {15}/>
        <Post imgUrl = {img2} message = {"How are you?"} likesCount = {8}/>
        <Post imgUrl = {img3} message = {"I learn IT and i like this!"} likesCount = {149}/>
    </div>
}
export default Posts;
