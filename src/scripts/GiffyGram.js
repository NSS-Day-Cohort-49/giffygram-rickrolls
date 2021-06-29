import { NavBar } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { CreatePost } from "./feed/CreatePost.js"

export const GiffyGram = () => {
    // Show main main UI
    return `
        <section>        
            ${NavBar()}
        </section>

        <section>
            <div class="giffygram__feed">
            ${CreatePost()}
        </section

        <section>
            ${Footer()}
        </section
    `
}
