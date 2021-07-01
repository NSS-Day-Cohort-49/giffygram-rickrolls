import { getUsers, sendMessages } from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

const applicationElement = document.querySelector("#giffyGram")

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "directMessageIcon") {
        BlankMessage = () => DirectMessage()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
    if (clickEvent.target.id === "directMessage__close" || clickEvent.target.id === "directMessage__cancel") {
        BlankMessage = () => {
            return `
            <div>

            </div>
            `
        }
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})


export let BlankMessage = () => {
    return `
        <div id="miniMode">

        </div>
    `
}

export let DirectMessage = () => {
    let users = getUsers()
    return `
    <div class="directMessage">
    <h3>Direct Message</h3>
    <div>Recipient:
        <select name="directMessage__userSelect" id="message__input" >
            <option>Choose a recipient...</option>
            ${users
                .map((user) => {
                    return `<option value="${user.id}">${user.name}</option>`
                })
                .join("")} 
        </select>
    </div>
    <div>
        <label for="message">Message:</label>
        <input name="message" class="message__input" type="text" placeholder="Message to user">
    </div>

    <button id="directMessage__submit">Save</button>
    <button id="directMessage__cancel">Cancel</button>

    <button id="directMessage__close">x</button>

</div>
    `;
}

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "directMessage__submit") {
        const userText = document.querySelector(
            "input[name='message']"
        ).value

        const recipientId = document.getElementById("message__input").value


        const dataToSendToAPI = {
            userId: localId,
            text: userText,
            read: false,
            recipientId: parseInt(recipientId)
        }

        sendMessages(dataToSendToAPI)
    }
})