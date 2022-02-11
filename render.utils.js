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
    console.log('render', games);
    span.append(a);
    div.append(img);
    li.append(span, div);
    // console.log(li);
    return li;
}

export function renderFocusGame(game) {
    const section = document.createElement('section');
    const divContainer = document.createElement('div');
    const divHeader = document.createElement('div');
    const divMeta = document.createElement('div');
    const divMetaRating = document.createElement('div');
    const divMetaName = document.createElement('div');
    const divIgn = document.createElement('div');
    const divIgnRating = document.createElement('div');
    const divIgnName = document.createElement('div');
    const divIframe = document.createElement('div');
    const iFrame = document.createElement('iframe');
    const divDescription = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    divContainer.classList.add('container');
    divContainer.classList.add(`bg${game.id}-image2`);

    divHeader.classList.add('game-header');
    divHeader.classList.add(`bg${game.id}-image2`);
    divHeader.textContent = `${game.game}`.toUpperCase();

    divMeta.classList.add(`meta-rating`);
    divMeta.classList.add(`bg${game.id}-image`);

    divMetaName.classList.add(`meta-name`);
    divMetaName.textContent = `META-CRITIC`;

    divMetaRating.classList.add(`rating1`);
    divMetaRating.textContent = `${game.metacritic_rating}`;

    divIgn.classList.add('ign-rating');
    divIgn.classList.add(`bg${game.id}-image2`);

    divIgnName.classList.add('ign-name');
    divIgnName.textContent = `IGN`;

    divIgnRating.classList.add('rating');
    divIgnRating.textContent = `${game.ign_rating}`;

    divIframe.classList.add('iframes');

    iFrame.classList.add('responsive-iframe');
    iFrame.width = `1258`;
    iFrame.height = '708';
    iFrame.src = `${game.iframes}`;
    iFrame.title = `YouTube video player`;
    iFrame.allow = `accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`;
    iFrame.allowFullscreen = 'yes';

    divDescription.classList.add('description');
    h2.textContent = `About game`;
    p.textContent = `${game.game_description}`;

    divMeta.append(divMetaName, divMetaRating);
    divIgn.append(divIgnName, divIgnRating);
    divIframe.append(iFrame);
    divDescription.append(h2, p);
    divContainer.append(divHeader, divMeta, divIgn, divIframe, divDescription);
    section.append(divContainer);
    return section;
}
