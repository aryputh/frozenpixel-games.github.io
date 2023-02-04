import "./ContactItem.css";

interface ContactItemProps {
    logo: string;
    text: string;
    link: string;
}

export default function ContactItem({ logo, text, link }: ContactItemProps) {
	return (
		<>
			<div className="contactHolder">
				<img className="contactTypeLogo" id="contactTypeLogo" src={logo}/>
				<button className="action" id="action" onClick={() => {window.open(link)}}>{text}</button>
			</div>
		</>
	);
}
