export const Footer = () => {
    return `
    <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                </select>
                <span id="postCount">   </span>
            </div>
            <div class="footer__item">
                Posts by user <select id="userSelection">
                                     
                </select>
            </div>
            <div class="footer__item">
            Show only favorites <input id="showOnlyFavorites" type="checkbox">
            </div>
        </footer>
    `
}