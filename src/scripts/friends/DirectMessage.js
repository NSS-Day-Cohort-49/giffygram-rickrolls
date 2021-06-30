/*
import { MessageForm } from "../message/MessageForm.js";
import { PrivateMessage } from "../message/PrivateMessages.js";

export const DirectMessage = () => {
    const clickPen = document.querySelector("#giffyGram")

    clickPen.addEventListener('click', (clickEvent) => {
        if (clickEvent.target.id === "directMessageIcon") {
            //TODO: Logic?
            let CreatePost = () => {
                return `
                    <div class="miniMode" id="miniMode">
                        Have a gif to post?
                    </div>
                `
            }
            // clickPen.innerHTML += MessageForm() //! Not working
        }
    })
}

export const Notifications = () => {
    const notifications = document.querySelector("#giffyGram")

    notifications.addEventListener('click', (clickEvent) => {
        if (clickEvent.target.id === "notifications") {
            //TODO: Logic?
            // notifications.innerHTML += PrivateMessage() //! Not working
        }
    })
}
*/



const applicationElement = document.querySelector("#giffyGram")

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "miniMode") {
        CreatePost = () => NewPost()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
    if (clickEvent.target.id === "directMessageIcon") {
        CreatePost = () => {
            return `
                
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

