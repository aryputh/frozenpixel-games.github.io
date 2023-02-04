import "./Footer.css";

export default function Footer() {
	return (
		<>
			<footer>
				&copy; {new Date().getFullYear().toString()} FrozenPixel Games
			</footer>
		</>
	);
}
