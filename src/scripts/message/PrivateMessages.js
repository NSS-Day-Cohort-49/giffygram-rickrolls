import { getUsers, getMessages } from "../data/provider.js"


export const PrivateMessage = () => {
    const messages = getMessages()
    const users = getUsers()

    /*
    ◾ If there are new messages sent to a user
        ◾ Than display the messages
    ◾ If the message has already been read 
        ◾ than remove the messages
    ◾ 
    ◾◾◾◾◾
    */

    let html = '<ul>'

    const messageItems = messages.map(messages => {



        const findUser = users.find((user)=> {
            if (messages.userId === user.id) {
                return true
            }})

        let foundUser = findUser.name


        
        return `
    <div class="message">
            ${messages.text}
        </div>
        <div class="messages">
            <a href="#" class="profileLink" id="profile--${messages.userId}">
                ${foundUser}
            </a>
            on ${messages.timestamp}
        </div>
        <div class="message__author">
            <div>
                ${messages.recipientId}
            </div>
    </div>`
    })

  html += messageItems.join("")
  html += '<ul>'

  return html
}

