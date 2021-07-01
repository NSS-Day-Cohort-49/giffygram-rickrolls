import { getPosts, getUsers, deletePosts, deleteLikes, sendLikes } from "../data/provider.js"
import { getLikes } from "../data/provider.js"

let localId = parseInt(localStorage.getItem("gg_user"))

const applicationElement = document.querySelector("#giffyGram")


export const PostList = () => {

  


    const posts = getPosts() 
    const likes = getLikes()
    const users = getUsers()

    let html = '<ul>'

    const postItems = posts.map(post => {

        function deleteFunction () {
            if (post.userId === localId) {
                let deleteDisplay = `${`<img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg"></img>`}`
                return deleteDisplay
            } else {
                return ""
            }
        }

        const findLikes = likes.find((like)=>{
            return like.userId === localId && like.postId === post.id
                
            })

        let likeId = findLikes

        function likesFunction () {
            if (findLikes != undefined) {
                let liked = `<img id="favoritePost--${likeId.id}" class="actionIcon" src="/images/favorite-star-yellow.svg">`
                return liked
            } else {
                return `<img id="notFavoritePost--${post.id}--${localId}" class="actionIcon" src="/images/favorite-star-blank.svg">`
            }
        }

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
            ${likesFunction()}
        </div>
        <div>
        ${deleteFunction()}

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


applicationElement.addEventListener("click", click => {
    if (click.target.id.startsWith("favoritePost--")) {
        const [,postId] = click.target.id.split("--")
        deleteLikes(parseInt(postId))
    }
})

applicationElement.addEventListener("click", click => {

    if (click.target.id.startsWith("notFavoritePost--")) {
            const [,pId,uId] = click.target.id.split("--")

            const nowLike = {
                postId: parseInt(pId),
                userId: parseInt(uId)
            }
            

            sendLikes(nowLike)

        }})
 