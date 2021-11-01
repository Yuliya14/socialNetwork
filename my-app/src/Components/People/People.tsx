import React from 'react'
import s from "./User/User.module.css";
import userImg from "../../assets/Img/user.png";
import axios from "axios";
import {PeoplePropsType} from "./PeopleContainer";
import {usersPageType} from "../../redux/user-reducer";

class People extends React.Component<PeoplePropsType, usersPageType> {
    constructor(props: PeoplePropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0//users")
            .then((response) => {
                this.props.setUsers(response.data.items)
            })}
    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id} className={s.User}>
                <div className={s.userBlock}>
                    <img style={{width: "100px", height: "100px"}}
                         src={u.photos.small !== null ? u.photos.small : userImg}/>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.follow(u.id)}>UNFOLLOW</button>
                            : <button onClick={() => this.props.unFollow(u.id)}>FOLLOW</button>}
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
}
export default People