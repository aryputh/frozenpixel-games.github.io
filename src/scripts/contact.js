import { contactPageText, youtubeLink, discordLink ,tiktokLink } from "../../data/contactPageData.js";

let text = document.querySelector(".text")
let links = document.querySelectorAll(".link")

text.innerHTML = contactPageText

links[0].addEventListener("click", ()=>{
    window.open(youtubeLink)
})

links[1].addEventListener("click", ()=>{
    window.open(discordLink)
})

links[2].addEventListener("click", ()=>{
    window.open(tiktokLink)
})