import { getPosts, getUsers, sendPosts } from "../data/provider.js"

const applicationElement = document.querySelector("#giffyGram")

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "miniMode") {
        CreatePost = () => NewPost()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
    if (clickEvent.target.id === "newPost__cancel") {
        CreatePost = () => {
            return `
                <div class="miniMode" id="miniMode">
                    Have a gif to post?
                </div>
            `
        }
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "newPost__submit") {
        const user = parseInt(localStorage.getItem("gg_user"))
        const userTitle = document.querySelector(
            "input[name='postTitle']"
        ).value
        const userImageURL = document.querySelector(
            "input[name='postURL']"
        ).value
        const userDescription = document.querySelector(
            "textarea[name='postDescription']"
        ).value

        const dataToSendToAPI = {
            userId: user,
            title: userTitle,
            imageURL: userImageURL,
            description: userDescription,
            timestamp: Date.now(),
        }

        sendPosts(dataToSendToAPI)
    }
})

export let CreatePost = () => {
    return `
        <div class="miniMode" id="miniMode">
            Have a gif to post?
        </div>
    `
}

export let NewPost = () => {
    return `
        <div class="newPost">
            <div>
                <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Title">
                </div>
            <div>
                <input value="" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
            </div>

            <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>

            <button id="newPost__submit">Save</button>
            <button id="newPost__cancel">Cancel</button>
        </div>
    `
}

export let UserProfile = () => {
    const users = getUsers()
    const posts = getPosts()

    for (const post of posts) {
        for (const user of users) {
            if (user.id === post.userId) {
                return `
            <div class="card">
            <h1>${user.name}</h1>
            <p class="title">CEO & Founder</p>
            <p>Harvard University</p>
            </div>
    `
            }
        }
    }
}
