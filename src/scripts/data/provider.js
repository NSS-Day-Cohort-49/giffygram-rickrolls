const API = "http://localhost:8088"

const applicationElement = document.querySelector("#giffyGram")

const applicationState = {
    users: [],
    posts: [],
    likes: [],
    messages: [],
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false,
    },
}

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then((response) => response.json())
        .then((serviceUsers) => {
            // Store the external state in application state
            applicationState.users = serviceUsers
        })
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
        .then((response) => response.json())
        .then((servicePosts) => {
            // Store the external state in application state
            applicationState.posts = servicePosts
        })
}

export const fetchLikes = () => {
    return fetch(`${API}/likes`)
        .then((response) => response.json())
        .then((serviceLikes) => {
            // Store the external state in application state
            applicationState.likes = serviceLikes
        })
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
        .then((response) => response.json())
        .then((serviceMessages) => {
            // Store the external state in application state
            applicationState.messages = serviceMessages
        })
}

export const getUsers = () => [...applicationState.users]
export const getPosts = () => [...applicationState.posts]
export const getLikes = () => [...applicationState.likes]
export const getMessages = () => [...applicationState.messages]

export const sendPosts = (userPosts) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userPosts),
    }
    return fetch(`${API}/posts`, fetchOptions)
        .then((response) => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
