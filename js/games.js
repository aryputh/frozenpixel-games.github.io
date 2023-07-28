// This JavaScript file is about the game cards

fetch("../public/games.json")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((game) => {
			renderGame(game, ".games-container");
		});
	})
	.catch((error) => {
		console.error("Error fetching game data:", error);
	});

function renderGame(game, selector) {
	const container = document.querySelector(selector);
	if (!container) return;

	const gameElement = document.createElement("div");
	gameElement.className = "game";
	gameElement.style.backgroundColor = game.cardColor;
	gameElement.innerHTML = `
	<img
	class="game-image"
	src="${game.imageUrl}"
	loading="lazy"
	alt="${game.gameTitle}"
/>
<!-- game image url -->
<h2 class="game-title">
	<a href="${game.gameUrl}"
		>${game.gameTitle}</a
	>
</h2>
<!-- title / link -->
<p class="game-description">${game.gameDescription}</p>
<!-- description -->
<p class="game-genre">${game.gameGenre}</p>
<!-- genre -->
<span class="game-icon">
	<i class="${game.gameIcon}"></i>
	<!-- icon-class -->
</span>
	`;
	container.appendChild(gameElement);
}
