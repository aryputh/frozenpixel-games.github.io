import "./GameItem.css";

interface GameItemProps {
	name: string;
	image: string;
	desc: string;
    link: string;
}

export default function GameItem({ name, image, desc, link }: GameItemProps) {
	return (
		<>
			<div className="gameHolder">
				<h1 id="gameName">{name}</h1>
				<img className="gameImage" id="gameImage" src={image}></img>
				<p id="desc">{desc}</p>
				<button className="download" id="download" onClick={() => {window.open(link)}}>
					Download Now
				</button>
			</div>
		</>
	);
}
