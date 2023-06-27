// This js file is only linked to the index.html page and powers the slide show.

let backgroundContainer = document.getElementById("background")
let imageSources = ["../public/background1.jpg", "../public/background2.jpg", "../public/background3.png", "../public/background4.png"]

let index = 0;

setInterval(()=>{
    if(index == imageSources.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }

    backgroundContainer.style.opacity = "0";
    setTimeout(()=>{
        backgroundContainer.style.backgroundImage = `url(${imageSources[index]})`;
        backgroundContainer.style.opacity = "1";
    }, 200)

},5000)