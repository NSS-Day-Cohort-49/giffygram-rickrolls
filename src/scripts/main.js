import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import {
    fetchLikes,
    fetchMessages,
    fetchPosts,
    fetchUsers,
} from "./data/provider.js"
import { Register } from "./auth/Register.js"

const applicationElement = document.querySelector("#giffyGram")

const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    fetchUsers()
        .then(fetchPosts)
        .then(fetchLikes)
        .then(fetchMessages)
        .then(() => {
            if (user) {
                applicationElement.innerHTML = GiffyGram()
            } else {
                applicationElement.innerHTML = LoginForm()
            }
        })
        .then(applicationElement.addEventListener("click", (clickEvent) => {
            if (clickEvent.target.id === "registerButton") {
                applicationElement.innerHTML = Register()
            }
        }))
    }


renderApp()

applicationElement.addEventListener("stateChanged", (customEvent) => {
    renderApp()
})
