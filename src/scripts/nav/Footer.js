import { getPosts, getUsers } from "../data/provider.js"

export const Footer = () => {
    const users = getUsers()
    const posts = getPosts()

    for (const post of posts) {
        return `
            <footer class="footer">
                <div class="footer__item">
                    Posts by user <select id="userSelection">
                    <option value="">Choose</option>
                    ${users
                        .map((user) => {
                            return `<option value="${post.id}--${user.id}">${user.name}</option>`
                        })
                        .join("")}                 
                    </select>
                </div>
                <div class="footer__item">
                    Show only favorites <input id="showOnlyFavorites" type="checkbox">
                </div>
            </footer>
            `
    }
}
