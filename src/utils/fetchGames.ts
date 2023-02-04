export default async function fetchGames() {
    const response = await fetch(`https://corsproxy.io/?https://itch.io/api/1/${import.meta.env.PUBLIC_ITCH_IO_API_KEY}/my-games`, { method: "GET"});
    return response.json();
};