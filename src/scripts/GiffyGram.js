import { NavBar, refreshPage } from "./nav/NavBar.js"
import { Footer } from "./nav/Footer.js"
import { CreatePost } from "./feed/CreatePost.js"
import { PostList } from "./feed/PostList.js"

export const GiffyGram = () => {
    // Show main main UI
    return `
        <section>        
        ${refreshPage()}
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
