import { colors } from "../scripts/colors.js";

const navBar = document.createElement("template");
navBar.innerHTML = `
<style>
header{
    width:100vw;
    height:10vh;
    background-color: ${colors["pixel-1"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family:"Poppins", sans-serif;
}

.brand{
    margin:40px;
    cursor:pointer;
}

.t1{
    font-size: 2rem;
    font-weight: bold;
    color:${colors["pixel-5"]};
}

.t2{
    color:${colors["pixel-2"]};
}

.items{
    margin:40px;
    font-size: 1.3rem;
    cursor:pointer;
  }
  
  .items a{
    text-decoration: none;
    color:#fff;
    padding: 10px;
    transition: 0.2s ease-in-out;
  }
  
  .items a:hover{
    color:${colors["pixel-2"]};
  }
  
.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}

@media(max-width: 768px) {
  .hamburger {
    display: block;
    margin: 40px;
  }
}

</style>



<header>
<div class = "brand" id="brand">
<span class="t1">
Frozen<span class="t2">Pixel</span>
</span>
</div>

<div class = "items">
<a class="nav-link" href="">Games</a>
<a class="nav-link" href="">Team</a>
<a class="nav-link" href="">Merch</a> 
<a class="nav-link" href="">Contact</a>
</div>
<div class="hamburger">
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>
</div>
</header>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navBar.content.cloneNode(true));

    let brand = this.shadowRoot.querySelector("#brand");
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
  }
}

window.customElements.define("nav-bar", NavBar);
