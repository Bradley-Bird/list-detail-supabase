export function renderGameCard(games) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const a = document.createElement('a');
    const div = document.createElement('div');
    const img = document.createElement('img');
    li.classList.add('dropdown');
    li.classList.add`${games.game}`;
    span.classList.add('link');
    a.textContent = `${games.game}`;
    img.src = `${games.home_page_image}`;
    img.classList.add(`${games.game}-img`);
    a.href = `/games/?id=${games.id}`;
    div.classList.add('dropdown-img');

    span.append(a);
    div.append(img);
    li.append(span, div);
    // console.log(li);
    return li;
}
