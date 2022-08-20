import { colors } from "../scripts/colors.js"

const navBar = document.createElement("template")
navBar.innerHTML =
`
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
    margin:20px;
    cursor:pointer;
}

.logo{
    width:2vw;
    height:5vh;
}

.t1{
    font-size: 2rem;
    font-weight: bold;
    color:${colors["white"]};
}

.t2{
    color:${colors["pixel-5"]};
}

.items{
    margin:20px;
    font-size: 1.3rem;
    cursor:pointer;
}

.items a{
    text-decoration: none;
    color:${colors["white"]};
    padding: 10px;
    transition: 0.2s ease-in-out;
}

.items a:hover{
    color:${colors["pixel-5"]};
}

</style>



<header>
<div class = "brand" id="brand">
<span class="t1">
Frozen<span class="t2">Pixel</span>
</span>
</div>

<div class = "items">
<a href="games.html">Games</a>
<a href="team.html">Team</a>
<a href="">Merch</a> 
<a href="contact.html">Contact</a>
</div>
</header>
`

class NavBar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(navBar.content.cloneNode(true))
        this.shadowRoot.getElementById("brand").addEventListener("click", ()=>{
            window.open("https://frozenpixel-games.github.io/")
        })
    }
}

window.customElements.define("nav-bar", NavBar)