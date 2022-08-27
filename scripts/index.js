let downloadButton = document.getElementById("download");
let latestGame = document.getElementById("latestGame");

downloadButton.addEventListener("click", () => {
  window.open("https://play.google.com/store/apps/dev?id=5025286485091152628");
});

latestGame.addEventListener("click", () => {
  window.open(
    "https://play.google.com/store/apps/details?id=com.HappyGamer3194_aryputh.JellyHunt"
  );
});
