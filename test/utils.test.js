import { renderGameCard } from '../render.utils.js';

const test = QUnit.test;

test('should return li with div and image/classes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="dropdown , halo-3"><span class="link"><a href="/games/?id=1">halo-3</a></span><div class="dropdown-img"><img src="./assets/halo-3-main.png" class="halo-3-img"></div></li>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGameCard({
        id: '1',
        game: 'halo-3',
        home_page_image: './assets/halo-3-main.png',
    });

    //Expect what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
