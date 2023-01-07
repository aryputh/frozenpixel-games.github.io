import { fetchHTML } from "../../scripts/global.js";

fetchHTML("contactCard");

export function define(html) {
  class ContactCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = document.createElement("template");
      template.innerHTML = html;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector("#contactTypeLogo").src = this.getAttribute("contactTypeLogo");
      this.shadowRoot.querySelector("#action").innerText = this.getAttribute("buttonText");
      this.shadowRoot.querySelector("#action").addEventListener("click", () => {
        window.open(this.getAttribute("contactLink"));
      });
    }
  }
  window.customElements.define("contact-card", ContactCard);    
}