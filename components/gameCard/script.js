import { fetchHTML } from "../../scripts/global.js";

fetchHTML("gameCard");

export function define(html) {
	class GameCard extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" });
			const template = document.createElement("template");
			template.innerHTML = html;
			this.shadowRoot.appendChild(template.content.cloneNode(true));
			this.shadowRoot.querySelector("#gameName").innerText =
				this.getAttribute("gameName");
			this.shadowRoot.querySelector("#gameImage").src =
				this.getAttribute("imageSrc");
			this.shadowRoot.querySelector("#desc").innerText =
				this.getAttribute("desc");
			this.shadowRoot
				.querySelector("#download")
				.addEventListener("click", () => {
					window.open(this.getAttribute("gameUrl"));
				});
		}
	}
	window.customElements.define("game-card", GameCard);
}
