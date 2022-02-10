import { getGames } from './fetch-utils.js';
import { renderGameCard } from './render.utils.js';

const gameCardContainer = document.querySelector('.main-ul');

async function fetchGames() {
    const games = await getGames();
    console.log('hello', games);

    for (let game of games) {
        console.log('game', game);
        const gameEl = renderGameCard(game);

        gameCardContainer.append(gameEl);
    }
    return gameCardContainer;
}
fetchGames();
