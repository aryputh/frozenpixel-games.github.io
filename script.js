const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const title = document.getElementsByClassName("tab-title")[0];
const footer = document.getElementsByClassName("page-footer")[0];

const filePath = window.location.pathname;
const fileName = filePath.split("/")[1];
const pageName = fileName.split(".")[0];

const year = new Date().getFullYear().toString();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

footer.innerText = `Copyright ${year} by HappyGamer3194`;

if (pageName == "index") {
  title.innerText = `Cloudium Studios - Home`;
} else {
  title.innerText = `Cloudium Studios - ${capitalizeFirstLetter(pageName)}`;
}
