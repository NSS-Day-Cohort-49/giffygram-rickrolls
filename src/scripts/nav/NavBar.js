export const refreshPage = () => {
    const refreshLogo = document.querySelector("#giffyGram");

    refreshLogo.addEventListener('click', (clickEvent) => {
        if (clickEvent.target.id === "logo") {
            location.reload();
        }
    })
}

import { getMessages} from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

export const NavBar = () => {

    const messages = getMessages()

    let counter = 0
    for (const message of messages) {
        if ( message.recipientId === localId  && message.read === false){
            counter ++
        }
    }

    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="/images/pb.png" alt="Giffygram icon" id="logo" >
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">

            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
                <div id="notifications" class="notification__count">
                    ${counter}
                </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
            
        </nav>

`
}
