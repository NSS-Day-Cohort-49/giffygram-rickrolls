import { getPosts, getUsers } from "../data/provider.js"
import { PostList } from "../feed/PostList.js"

const users = getUsers()
const posts = getPosts()

const applicationElement = document.querySelector("#giffyGram")

// applicationElement.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.value.startWith("user--")) {
//         const [, clickedUser] = click.target.value.split("--")
//     }
//     applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
// })

export const Footer = () => {
    return `
            <footer class="footer">
                <div class="footer__item">
                    Posts by user 
                    <select id="userSelection">
                        <option value="">Choose</option>
                        ${users
                            .map((user) => {
                                return `<option value="user--${user.id}">${user.name}</option>`
                            })
                            .join("")}                 
                    </select><span id="postCount">  </span>
                </div>
                <div class="footer__item">
                    Show only favorites <input id="showOnlyFavorites" type="checkbox">
                </div>
            </footer>
            `
}
