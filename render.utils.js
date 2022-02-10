export function renderGameCard(games) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const img = document.createElement('img');

    for (let game in games) {
        li.classList.add(`game.game`);
    }
    return(li)
}
