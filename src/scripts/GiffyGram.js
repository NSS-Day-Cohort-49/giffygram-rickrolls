import { NavBar, refreshPage } from "./nav/NavBar.js"
import { BlankMessage } from "./message/MessageForm.js"
import { Footer } from "./nav/Footer.js"
import { CreatePost, UserProfile } from "./feed/CreatePost.js"
import { PostList } from "./feed/PostList.js"
import { PrivateMessage } from "./message/PrivateMessages.js"

const applicationElement = document.querySelector("#giffyGram")

applicationElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "notifications") {
        GiffyGram = () => MessagePage()
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
    if (clickEvent.target.id === "profile--1") {
        GiffyGram = () => UserPages()
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

