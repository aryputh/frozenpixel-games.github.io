const playStore = document.querySelector("#playStoreLink");
const latestGame = document.querySelector("#latestGame");
const itch = document.querySelector("#itchLink");
const info = document.querySelector("#info");

playStore.addEventListener("click", () => {
  window.open("https://play.google.com/store/apps/dev?id=5025286485091152628");
});

itch.addEventListener("click", () => {
  window.open("https://happygamer3194.itch.io/");
});

latestGame.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.HappyGamer3194_aryputh.JellyHunt"
  );
});