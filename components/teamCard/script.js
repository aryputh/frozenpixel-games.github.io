fetch("./components/teamCard/index.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
  class TeamCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = document.createElement("template");
      template.innerHTML = html;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector("#image").src = this.getAttribute("imageSrc");
      this.shadowRoot.querySelector("#username").innerText = this.getAttribute("username");
      this.shadowRoot.querySelector("#desc").innerText = this.getAttribute("desc");
    }
  }
  window.customElements.define("team-card", TeamCard);    
}