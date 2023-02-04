import "./Navbar.css";
export default function Navbar() {
	return (
		<>
			<header>
				<div className="brand" id="brand">
					<a className="t1" href="/">
						Frozen<span className="t2">Pixel</span>
					</a>
				</div>
				<div className="items">
					<a className="nav-link" href="/games">
						Games
					</a>
					<a className="nav-link" href="/team">
						Team
					</a>
					<a className="nav-link" href="/merch">
						Merch
					</a>
					<a className="nav-link" href="/contact">
						Contact
					</a>
				</div>
				<div id="hamburger" onClick={() => document.querySelector(".items")?.classList.toggle("active")}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
			</header>
		</>
	);
}
