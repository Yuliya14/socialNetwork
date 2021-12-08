import postReducer, {addPostAC, profilePageType} from "./post-reducer";

let startState:  profilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, imgUrl: "img1", message: "Hello!", likesCount: 15},
            {id: 2, imgUrl: "img2", message: "How are you?", likesCount: 8},
            {id: 3, imgUrl: "img3", message: "I learn IT and i like this!", likesCount: 149}],
        profile: null,
        status: "",
    }
})
test ("post should be added", () => {
    let action = addPostAC("Hello message")
    let endState = postReducer(startState, action)
    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toEqual("Hello message")
    expect(endState.posts[3].message).toEqual("I learn IT and i like this!")
})
