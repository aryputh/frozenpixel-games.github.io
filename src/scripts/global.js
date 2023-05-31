// This JavaScript file is linked to all pages.
const currentYear = new Date().getFullYear()

let navLeft = document.querySelector(".navLeft")
let footerText = document.querySelector(".footerText")

navLeft.addEventListener("click", ()=>{
    window.open("../pages/index.html", "_self")
})

footerText.innerHTML = "&copy; " + currentYear + " FrozenPixel Games"