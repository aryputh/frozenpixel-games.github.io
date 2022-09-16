import { colors } from "../scripts/colors.min.js";

const game = document.createElement("template");
game.innerHTML = `

<style>
.gameHolder{
    width:360px;
    height:460px;
    background-color:${colors["pixel-5"]};
    border-radius:25px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:top;
    color:white;
    transition: 0.2s ease-in-out;
}

.gameHolder:hover{
  background-color:${colors["pixel-6"]};
}

.gameImage{
    width:300px;
    height:220px;
    border-radius:25px;
}

.download{
    width: 200px;
    height: 60px;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 30px;
    color: white;
    transition: 0.3s ease-in-out;
    background-color: var(--pixel-1);
    cursor: pointer;
}

.download:hover{
    background-color: var(--pixel-2)
}

</style>

<div class="gameHolder">
<h1 id="gameName"></h1>
<img class="gameImage" id="gameImage"></img>
<p id="desc"></p>
<button class="download" id="download">Download Now</button>
</div>
`;

class GameHolder extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(game.content.cloneNode(true));
        this.shadowRoot.getElementById("gameName").innerText =
            this.getAttribute("gameName");
        this.shadowRoot.getElementById("gameImage").src =
            this.getAttribute("imageSrc");
        this.shadowRoot.getElementById("desc").innerText =
            this.getAttribute("desc");
        this.shadowRoot.getElementById("download").addEventListener("click", () => {
            window.open(this.getAttribute("gameUrl"));
        });
    }
}

window.customElements.define("game-holder", GameHolder);
