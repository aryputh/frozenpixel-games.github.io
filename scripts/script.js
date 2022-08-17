const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const title = document.getElementsByClassName("tab-title")[0];
const footer = document.getElementsByClassName("page-footer")[0];

const linkBrand = document.querySelector("[link-brand]");
const linkHome = document.querySelector("[link-home]");
const linkGames = document.querySelector("[link-games]");
const linkTeam = document.querySelector("[link-team]");
const linkContact = document.querySelector("[link-contact]");

const filePath = window.location.pathname;
const fileName = filePath.split("/")[1];
const pageName = fileName.split(".")[0];

const year = new Date().getFullYear().toString();

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function linkSetter(main, games, team, contact) {
	linkBrand.href = main;
	linkHome.href = main;
	linkGames.href = games;
	linkTeam.href = team;
	linkContact.href = contact;

	linkBrand.innerText = "Cloudium Studios";
	linkHome.innerText = "Home";
	linkGames.innerText = "Games";
	linkTeam.innerText = "Team";
	linkContact.innerText = "Contact";
}

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

footer.innerText = `Copyright ${year} by HappyGamer3194`;

if (pageName == "index" || !pageName) {
	linkHome.classList.add("active");
	title.innerText = `Cloudium Studios - Home`;
} else {
	title.innerText = `Cloudium Studios - ${capitalizeFirstLetter(pageName)}`;
}

if (window.location.hostname == "cloudiumstudios.github.io") {
	linkSetter("/", "games", "team", "contact");
} else {
	linkSetter("index.html", "games.html", "team.html", "contact.html");
}

if (title.innerText.includes("Home")) {
	linkHome.classList.add("active");
} else {
	linkHome.classList.remove("active");
}

if (title.innerText.includes("Games")) {
	linkGames.classList.add("active");
} else {
	linkGames.classList.remove("active");
}

if (title.innerText.includes("Team")) {
	linkTeam.classList.add("active");
} else {
	linkTeam.classList.remove("active");
}

if (title.innerText.includes("Contact")) {
	linkContact.classList.add("active");
} else {
	linkContact.classList.remove("active");
}