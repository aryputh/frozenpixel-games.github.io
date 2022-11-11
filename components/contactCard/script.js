fetch("./components/contactCard/index.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    class ContactCard extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("#contactTypeLogo").src =
          this.getAttribute("contactTypeLogo");
        this.shadowRoot.querySelector("#desc").innerText =
          this.getAttribute("desc");
        this.shadowRoot.querySelector("#action").innerText =
          this.getAttribute("buttonText");
        this.shadowRoot.querySelector("#action").addEventListener("click", () => {
          window.open(this.getAttribute("contactLink"));
        });
      }
    }
    
    window.customElements.define("contact-card", ContactCard);    
}