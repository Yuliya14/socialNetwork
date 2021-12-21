import 'axios';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': 'fc2c077f-4801-47ba-97bc-ed7e7877df93'},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const profileAPI = {
    getProfileUser(userId: string | undefined) {
        return instance.get("/profile/" + userId)
            .then(response => response.data)
    },
    getStatus(userId: string | undefined) {
        return instance.get("/profile/status/" + userId)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put("/profile/status/", {status})
            .then(response => response.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put("/profile/photo/", formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveData(profileData: any) {
        return instance.put("/profile", profileData)
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
    me() {
        return instance.get("auth/me")
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post("auth/login", {email, password, rememberMe}, )
            .then(response => response.data)
    },
    logout() {
        return instance.delete("auth/login",)
            .then(response => response.data)
    }
}