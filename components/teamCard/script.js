import { fetchHTML } from "../../scripts/global.js";

fetchHTML("teamCard");

export function define(html) {
	class TeamCard extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" });
			const template = document.createElement("template");
			template.innerHTML = html;
			this.shadowRoot.appendChild(template.content.cloneNode(true));
			this.shadowRoot.querySelector(
				"#image"
			).src = `images/team/${this.getAttribute("imageSrc")}`;
			this.shadowRoot.querySelector("#username").innerText =
				this.getAttribute("username");
			this.shadowRoot.querySelector("#role").innerText =
				this.getAttribute("role");
		}
	}
	window.customElements.define("team-card", TeamCard);
}
