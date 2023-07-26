// This JavaScript file is about the navbar custom component.

export class Navbar extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `<nav>
        <a href="/" class="navLeft">
            <img class="logo" src="/public/logo.svg" />
            <h1 class="brandText">FrozenPixel</h1>
        </a>
        <div class="navRight">
            <ul class="links">
                <a href="/">Home</a>
                <a href="/games" class="rewrite">Games</a>
                <a href="/about" class="rewrite">About</a>
                <a href="/contact" class="rewrite">Contact</a>
            </ul>
        </div>
    </nav>`;
	}
}