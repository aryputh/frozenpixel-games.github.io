import { gameInfo } from "../../data/gameInfo.js";

let gamesContainer = document.querySelector(".gamesContainer")

function renderGame(game){

    let gameHolder = document.createElement("div")
    let gameHolderChild = document.createElement("div")
    let gameImage = document.createElement("img")
    let gameInformation = document.createElement("div")
    let gameName = document.createElement("h1")
    let gameDescription = document.createElement("p")
    let download = document.createElement("button")
    let os = document.createElement("img")

    gameHolder.classList.add("gameHolder")
    gameHolderChild.classList.add("gameHolderChild")
    gameImage.classList.add("gameImage")
    gameInformation.classList.add("gameInformation")
    gameName.classList.add("gameName")
    gameDescription.classList.add("gameDescription")
    download.classList.add("download")
    os.classList.add("os")

    gameImage.src = game.gameImage
    gameName.innerText = game.gameName
    gameDescription.innerText = game.gameDescription
    download.innerText = "Download for "
    os.src = game.gamePlatformIcon

    gameHolder.style.backgroundColor = game.gameCardColor
    download.style.backgroundColor = game.gameDownloadButtonColor

    download.addEventListener("mouseover", ()=>{
        download.style.borderRadius = "40px"
    })

    download.addEventListener("mouseout", ()=>{
        download.style.borderRadius = "10px"
    })

    download.addEventListener("click", ()=>{
        window.open(game.gameDownloadLink)
    })

    gameHolder.appendChild(gameHolderChild)
    gameHolderChild.appendChild(gameImage)
    gameHolderChild.appendChild(gameInformation)
    gameInformation.appendChild(gameName)
    gameInformation.appendChild(gameDescription)
    gameInformation.appendChild(download)
    download.appendChild(os)

    gamesContainer.appendChild(gameHolder)

}

window.addEventListener("DOMContentLoaded", ()=>{
    gameInfo.forEach(game=>{
        renderGame(game)
    })
})