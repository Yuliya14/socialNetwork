import React from "react"
import s from "./User/User.module.css";
import {PeoplePropsType} from "./PeopleContainer";
import axios from "axios";
import userImg from '../../assets/Img/user.png'


const People = (props: PeoplePropsType) => {
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0//users").then((response) => {
            props.setUsers(response.data.items)
            console.log(response.data)
        })
        /*{props.setUsers([
        {
            id: 1,
            fullName: "Yuliya Dovgun",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ei-user.svg/1200px-Ei-user.svg.png",
            mail: "blabla@mail.ru",
            professionSphere: {professionalArea: "IT", position: "Frontend Developer"},
            follow: true
        },
        {
            id: 2,
            fullName: "Olga Milach",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ei-user.svg/1200px-Ei-user.svg.png",
            mail: "olga@mail.ru",
            professionSphere: {professionalArea: "Pharmaceutics ", position: "Chemical engineer"},
            follow: true
        },
        {
            id: 3,
            fullName: "Elena Dovgun",
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ei-user.svg/1200px-Ei-user.svg.png",
            mail: "elena@mail.ru",
            professionSphere: {professionalArea: "Education", position: "Kindergartener"},
            follow: false
        }])}*/
    }

    return <div>
        {props.users.map(u => <div key={u.id} className={s.User}>
            <div className={s.userBlock}>
                <img style={{width: "100px", height: "100px"}}
                     src={u.photos.small !== null ? u.photos.small : userImg}/>
                <div>
                    {u.followed
                    ? <button onClick={() => props.follow(u.id)}>UNFOLLOW</button>
                    : <button onClick={() => props.unFollow(u.id)}>FOLLOW</button>}
                </div>
            </div>
            <div>
                <div>{u.name}</div>
                <div>{"u.mail"}</div>
            </div>
            <div>
                <div>{"u.professionSphere.professionalArea"}</div>
                <div>{"u.professionSphere.position"}</div>
            </div>
        </div>)
        }
    </div>
}
export default People

