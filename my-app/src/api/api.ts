import 'axios';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '9f222034-5f06-46a4-85f2-2be1a3f3b7d1'},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const profileAPI = {
    getProfileUser(userId: string | undefined) {
        return instance.get("/profile/" + userId)
            .then(response => response.data)
    },
    getStatus(userId: string | undefined){
        return instance.get( "/profile/status/" + userId)
            .then(response => response.data)
    },
    updateStatus(status: any ){
        // @ts-ignore
        return instance.put( "/profile/status/", {status})
            .then(response => response.data)
    }
}
export const peopleContainerAPI = {
    getUser(countUsersOnPage = 5, currentPage = 1) {
        return instance.get(`/users?count=${countUsersOnPage}&page=${currentPage}`)
            .then(response => response.data)
    }
}
export const peopleAPI = {
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    setUser() {
        return instance.get("auth/me")
            .then(response => response.data)
    }
}