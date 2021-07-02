import { NavBar, refreshPage } from "./nav/NavBar.js"
import { BlankMessage } from "./message/MessageForm.js"
import { Footer } from "./nav/Footer.js"
import { CreatePost} from "./feed/CreatePost.js"
import { PostList } from "./feed/PostList.js"
import { PrivateMessage } from "./message/PrivateMessages.js"
import { getUsers } from "./data/provider.js"

const applicationElement = document.querySelector("#giffyGram")

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "notifications") {
        GiffyGram = () => MessagePage()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export let GiffyGram = () => {
    // Show main main UI
    return `
        <section>        
        ${refreshPage()}
        ${BlankMessage()}
            ${NavBar()}
        </section>

        <div class="giffygram__feed">
            <section>          
                ${CreatePost()}
            </section>

            <section class="post">
                ${PostList()}
            </section>  
        </div>                 


        <section>
            ${Footer()}
        </section>
    `
}

export let MessagePage = () => {
    // Show main main UI
    return `
        <section>        
        ${refreshPage()}
        ${BlankMessage()}
            ${NavBar()}
        </section>

        <div class="giffygram__feed">
            <section>          
                ${PrivateMessage()}
            </section>  
        </div>                 


        <section>
            ${Footer()}
        </section>
    `
}

export let UserPages = () => {
    // Show main main UI
    return `
        <section>        
        ${refreshPage()}
        ${BlankMessage()}
            ${NavBar()}
        </section>

        <div class="giffygram__feed">
            <section>          
                ${UserProfile()}
            </section>  
        </div>                 


        <section>
            ${Footer()}
        </section>
    `
}

export let UserProfile = () => {
    const users = getUsers()

        for (const user of users) {
            if (user.id === globalpostId) {
                return `
            <div class="card">
            <h1>${user.name}</h1>
            <p class="title">${user.email}</p>
            <p>Harvard University</p>
            </div>
    `
            }
        }
    
}


let globalpostId = null

applicationElement.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id.startsWith("profile--")) {
    const [,messageid] = clickEvent.target.id.split("--")
    globalpostId = parseInt(messageid)
    GiffyGram = () => UserPages()
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}
})