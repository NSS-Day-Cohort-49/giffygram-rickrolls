import { getUsers, getMessages, markRead } from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

const applicationElement = document.querySelector("#giffyGram")

export const PrivateMessage = () => {

    const messages = getMessages()
    const users = getUsers()

    let html = '<ul>'

    const currentMessages = messages.map(message => {
        if(message.recipientId === localId && message.read === false){

            const findUser = users.find((user)=> {
                if (message.userId === user.id) {
                    return true
                }})
    
            let foundUser = findUser.name

            

        return `
        <div class="messages">
            <div class="messageList">
                <div class="message" id="message--${message.id}--${message.text}}--${message.recipientId}}--${message.userId}">
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


applicationElement.addEventListener("click", click => {

    if (click.target.id.startsWith("message--")) {
            const [,messageid,mText, recepId, mId] = click.target.id.split("--")                   
            
/*             const dataToSendToAPI = {
                userId: parseInt(mId),
                text: mText,
                read: true,
                recipientId: parseInt(recepId)
            }
     */

            markRead(parseInt(messageid))}

        })
