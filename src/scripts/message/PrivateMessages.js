import { getUsers, getMessages } from "../data/provider.js"


export const PrivateMessage = () => {
    return `
        <div class="messages">
            <div class="messageList">
                <div class="message" id="message--21">
                    <div class="message__author">From Ray Medrano</div>
                    <div class="message__text">this is a message</div>
                </div>
            </div>
        </div>
        `
}

