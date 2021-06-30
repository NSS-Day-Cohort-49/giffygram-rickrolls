import { MessageForm } from "../message/MessageForm.js";

export const refreshPage = () => {
    const clickPen = document.querySelector("#giffyGram")

    clickPen.addEventListener('click', (clickEvent) => {
        if (clickEvent.target.id === "directMessageIcon") {
            location.reload();
        }
    })
}
