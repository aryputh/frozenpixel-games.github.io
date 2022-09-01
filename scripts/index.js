let playStore = document.getElementById("playStoreLink");
let latestGame = document.getElementById("latestGame");
let itch = document.getElementById("itchLink");
let info = document.getElementById("info");

playStore.addEventListener("click", () => {
  window.open("https://play.google.com/store/apps/dev?id=5025286485091152628");
});

itch.addEventListener("click", () => {
  window.open("https://happygamer3194.itch.io/");
});

latestGame.addEventListener("mouseover", () => {
  latestGame.style.transform = "translateY(-40px)";
  info.style.opacity = "100%";
});

latestGame.addEventListener("mouseleave", () => {
  latestGame.style.transform = "";
  info.style.opacity = "0%";
});

latestGame.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.HappyGamer3194_aryputh.JellyHunt"
  );
});