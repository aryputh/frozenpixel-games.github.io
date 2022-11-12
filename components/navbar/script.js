fetch("./components/navbar/index.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
  class NavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const template = document.createElement("template");
      template.innerHTML = html;
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const brand = this.shadowRoot.querySelector("#brand");
      const hamburger = this.shadowRoot.querySelector("#hamburger");
      const items = this.shadowRoot.querySelector(".items");
      const links = this.shadowRoot.querySelectorAll(".nav-link");

      const location = window.location;
      let fileExt = "";

      if (location.hostname !== "frozenpixel-games.github.io") fileExt = ".html";
      links.forEach((link) => {
        link.href = `${link.innerText.toLowerCase()}${fileExt}`;
      });
      hamburger.addEventListener("click", () => {
        items.classList.toggle("active");
      });
      brand.addEventListener("click", () => {
        window.open("/", "_self");
      });
    }
  }
  window.customElements.define("nav-bar", NavBar);  
}