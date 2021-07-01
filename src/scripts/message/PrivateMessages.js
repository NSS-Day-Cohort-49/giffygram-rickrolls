import { getUsers, getMessages } from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

const applicationElement = document.querySelector("#giffyGram")

export const PrivateMessage = () => {

    const messages = getMessages()
    const users = getUsers()

    let html = '<ul>'

    const currentMessages = messages.map(message => {
        if(message.recipientId === localId){

            const findUser = users.find((user)=> {
                if (message.userId === user.id) {
                    return true
                }})
    
            let foundUser = findUser.name

        return `
        <div class="messages">
            <div class="messageList">
                <div class="message" id="message--${message.id}">
                    <div class="message__author">from ${foundUser}</div>
                    <div class="message__text">${message.text}</div>
                </div>
            </div>
        </div>
        `
        }
    })

    html += currentMessages.join("")
    html += '<ul>'

    return html

}

