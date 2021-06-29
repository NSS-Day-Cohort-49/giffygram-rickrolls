import { getPosts } from "../data/provider.js"

export const PostList = () => {
    const posts = getPosts()

    for (const post of posts) {
        return `
        <header>
            <h2 class="post__title">${post.title}</h2>
        </header>
        <img class="post__image" src="${post.imageURL}">
        <div class="post__description">
            ${post.description}
        </div>
        <div class="post__tagline">
            Posted by
            <a href="#" class="profileLink" id="profile--2">
                ${post.userId}
            </a>
            on ${post.timestamp}}
        </div>
        <div class="post__actions">
            <div>
                <img id="favoritePost--4" class="actionIcon" src="/images/favorite-star-blank.svg">
            </div>
            <div>
                

            </div>
        </div>`
    }
}
