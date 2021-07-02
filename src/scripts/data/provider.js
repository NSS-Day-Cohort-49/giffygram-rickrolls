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
export const getFeed = () => [...applicationState.feed]

export const deletePosts = (id) => {
    return fetch(`${API}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
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

export const deleteLikes = (id) => {
    return fetch(`${API}/likes/${id}`, { method: "DELETE" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const sendLikes = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/likes`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendMessages = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

/* export const markRead = (userServiceRequest) => {
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServiceRequest})
    }


    return fetch(`${API}/messages/${id}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
} */


/* applicationElement.addEventListener("click", click => {

    if (click.target.id.startsWith("message--")) {
            const [,pId, read, recepIt, mId] = click.target.id.split("--")                   
            
            if (parse(pId) === message.id){
                
                markRead()
                
            }
            markRead()}

        }) */


/* export const markRead = (id) => {
    return fetch(`${API}/message/${id}`, { method: "PUT" })
        .then(
            () => {
                applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
} */

export const markRead = (id) => {
    for(const message of applicationState.messages) {
        if(message.id === id) {
            fetch(`${API}/messages/${message.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: message.userId,
                    recipientId: message.recipientId,
                    text: message.text,
                    read: true})
            }
        )}
    }

    
}