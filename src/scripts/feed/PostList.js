import { getPosts, getUsers, deletePosts } from "../data/provider.js"
import { getLikes } from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

const applicationElement = document.querySelector("#giffyGram")

export const PostList = () => {

  


    const posts = getPosts() 
    const likes = getLikes()
    const users = getUsers()

    /* const findDelete = posts.find(post => {
        if (post.userId === localId){
            return `<img id="blockPost--${post.Id}" class="actionIcon" src="/images/block.svg"></img>`
        }
    }) */




    let html = '<ul>'

    const postItems = posts.map(post => {


        const findUser = users.find((user)=> {
            if (post.userId === user.id) {
                return true
            }})

        let foundUser = findUser.name



        
        return `<header>
        <h2 class="post__title">${post.title}</h2>
    </header>
    <img class="post__image" src="${post.imageURL}">
    <div class="post__description">
        ${post.description}
    </div>
    <div class="post__tagline">
        Posted by
        <a href="#" class="profileLink" id="profile--${post.userId}">
            ${foundUser}
        </a>
        on ${post.timestamp}
    </div>
    <div class="post__actions">
        <div>
            <img id="favoritePost--${post.id}" class="actionIcon" src="/images/favorite-star-yellow.svg">
        </div>
        <div>
            ${`<img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg"></img>`}

        </div>
    </div>`
    })

  html += postItems.join("")
  html += '<ul>'

  return html
}



applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("blockPost--")) {
        const [,postId] = click.target.id.split("--")
        deletePosts(parseInt(postId))
    }
})

