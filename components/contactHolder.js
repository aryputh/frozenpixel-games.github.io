import { colors } from "../scripts/colors.js";

const contact = document.createElement("template");
contact.innerHTML = `

<style>
.contactHolder{
    width: 280px;
    height: 400px;
    background-color:${colors["pixel-5"]};
    border-radius:25px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    transition:0.2s ease-in-out;
}

.contactHolder:hover{
  background-color:${colors["pixel-6"]};
}

.contactTypeLogo{
    border-radius:25px;
    width:220px;
    height:220px;
}

.action{
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

.action:hover{
  background-color:${colors["pixel-2"]} 
}

</style>


<div class = "contactHolder">
<img class = "contactTypeLogo" id="contactTypeLogo">
<p class = "desc" id="desc">test 1</p>
<button class = "action" id="action">test 1 </button>
</div>

`;

class ContactHolder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(contact.content.cloneNode(true));
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

window.customElements.define("contact-holder", ContactHolder);
