document.querySelector("footer").innerHTML = `&copy; ${new Date()
	.getFullYear()
	.toString()} FrozenPixel Games`;

export function fetchHTML(component) {
	const filePath = `../components/${component}/script.js`;
	import(filePath).then(({ define }) => {
		fetch(`../components/${component}/index.html`)
			.then((stream) => stream.text())
			.then((text) => define(text));
	});
}
