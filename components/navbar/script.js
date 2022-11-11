fetch("./components/navbar/index.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    class NavBar extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
          this.shadowRoot.appendChild(template.content.cloneNode(true));
      
          let brand = this.shadowRoot.querySelector("#brand");
          let hamburger = this.shadowRoot.querySelector("#hamburger");
          let items = this.shadowRoot.querySelector(".items");
          let links = this.shadowRoot.querySelectorAll(".nav-link");
          let domain = null;
      
          if (window.location.hostname === "frozenpixel-games.github.io") {
            domain = "https://frozenpixel-games.github.io/";
            for (let link of links) {
              link.href = link.innerText.toLowerCase();
            }
          } else {
            domain = "/index.html";
            for (let link of links) {
              link.href = `${link.innerText.toLowerCase()}.html`;
            }
          }
      
          brand.addEventListener("click", () => {
            window.open(domain, "_self");
          });
      
          hamburger.addEventListener("click", () => {
            items.classList.toggle("active");
          });
        }
      }
      window.customElements.define("nav-bar", NavBar);  
}