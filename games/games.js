import { renderFocusGame } from '../render.utils.js';
import { getFocusGame } from '../fetch-utils.js';

const focusGameContainer = document.querySelector('body');

async function fetchFocusGame() {
    const params = new URLSearchParams(window.location.search);

    const gameId = await getFocusGame(params.get('id'));

    const focusGameEL = renderFocusGame(gameId);
    focusGameContainer.append(focusGameEL);
    return focusGameContainer;
}
fetchFocusGame();
