// This JavaScript file is linked to all pages.

import { Navbar } from "./navbar.js";
import { renderGame } from "./games.js";
import { data } from "../public/data.js";

customElements.define("navbar-element", Navbar);

const footer = document.querySelector("footer");
const aboutUs = document.querySelector("#about-text");
const contactUs = document.querySelector("#contact-text");
const gamesContainer = document.querySelector("#gamesContainer");
const rewrites = document.querySelectorAll(".rewrite");
const links = document.querySelectorAll(".socialLinks a");

const aboutUsText = `
FrozenPixel Games is a studio founded in 2020 with the goal of providing challenging and engaging games for everyone. We develop games for a variety of platforms including Android and PC.

The team at FrozenPixel Games is small, with fewer than 10 people working on the development team. We are all passionate about creating quality games that can be enjoyed by everyone.

While FrozenPixel Games is a relatively new studio, we have already released many 2D and 3D games for players. Our commitment to providing quality games has let us spread powerful themes in our games.
`;

export const contactUsText = `
Here at FrozenPixel Games we believe in direct contact with our players. If you have any questions, comments, or concerns, please reach out! You can do this

by joining our Discord or by filling out the google form <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkSG4thpFVlsZFXmUrnmUNQHRlk308xg6CvYHjzfLv1iZiwg/viewform">here</a>. We also have a YouTube channel and a TikTok account linked down below.                             
`;

const footerText = `&copy;${new Date().getFullYear()} FrozenPixel Games`;

if (footer != null) footer.innerHTML = footerText;
else console.error("No footer found!");

if (rewrites != null && rewrites.length !== 0)
	rewrites.forEach((rewrite) => {
		if (
			location.hostname === "localhost" ||
			location.hostname === "127.0.0.1"
		)
			rewrite.href = `${rewrite.href}.html`;
	});
else console.error("No rewrites found!");

if (links != null && links.length !== 0) {
	links[0].href = data.links.youtubeLink;
	links[1].href = data.links.discordLink;
	links[2].href = data.links.tiktokLink;
	links[3].href = data.links.emailLink;
}
if (aboutUs != null) aboutUs.innerText = aboutUsText;

if (contactUs != null) contactUs.innerHTML = contactUsText;

if (gamesContainer != null)
	data.games.forEach((game) =>
		renderGame(game, gamesContainer, document, window)
	);
