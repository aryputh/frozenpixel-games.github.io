import { useEffect, useState } from "react";
import fetchGames from "../utils/fetchGames";
import GameItem from "./GameItem";

interface Game {
    classification: string;
    title: string;
    cover_url: string;
    short_text: string;
    url: string;
}

export default function GameRow() {
    let rawGames;
    const [games, setGames] = useState<Game[]>([]);
    useEffect(() => {
        async function run() {
            rawGames = await fetchGames();
            setGames(rawGames["games"].filter((game: Game) => game.classification === "game"));
        };
        run();
    }, []);
	return (
		<>
			<main className="gameRow">
				{games.map(game => (
                    <GameItem name={game.title} image={game.cover_url} desc={game.short_text} link={game.url} />
                ))}
			</main>
		</>
	);
}
