import userReducer, {followAC, unFollowAC, usersPageType} from "./user-reducer";

let startState: usersPageType
beforeEach(() => {
    startState = {
        users: [
            {id: 1, name: "Kate", followed: false, photos: {small: "#", large: "#"}, status: "#", uniqueUrlName: "Kate"},
            {id: 2, name: "Vika", followed: false, photos: {small: "#", large: "#"}, status: "#", uniqueUrlName: "Vika"},
            {id: 3, name: "Lena", followed: false, photos: {small: "#", large: "#"}, status: "#", uniqueUrlName: "Lena"},
            {id: 4, name: "Vadim", followed: false, photos: {small: "#", large: "#"}, status: "#", uniqueUrlName: "Vadim"},
            {id: 5, name: "Valera", followed: false, photos: {small: "#", large: "#"}, status: "#", uniqueUrlName: "Valera"},
        ],
        usersTotalCount: 0,
        countUsersOnPage: 5,
        currentPage: 1,
        isLoad: false,
        followingUser: []
    }
})
test("follow user", () => {
    let action = followAC(4)
    let endState = userReducer(startState, action)
    expect(endState.users[3].followed).toBe(true)
})
test("unfollow user", () => {
    let action = unFollowAC(4)
    let endState = userReducer(startState, action)
    expect(endState.users[4].followed).toBe(false)
})
