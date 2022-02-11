import { renderFocusGame, renderGameCard } from '../render.utils.js';

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



test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<section><div class="container bg2-image2"><div class="game-header bg2-image2">DIABLO-3</div><div class="meta-rating bg2-image"><div class="meta-name">META-CRITIC</div><div class="rating1">88%</div></div><div class="ign-rating bg2-image2"></div><div class="rating">9.5/10</div><div class="ign-name">IGN</div></div><div class="iframes"><iframe class="responsive-iframe" width="1258" height="708" src="https://www.youtube.com/embed/M_c1q2oMHlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div class="description"><h2>About game</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem optio nam labore deleniti aliquam ratione? Libero hic quod quas sed ullam similique natus, a, mollitia, officiis corporis nulla repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore nisi animi porro et mollitia perferendis amet commodi voluptatibus ipsa, tenetur fugiat eos quaerat, sit quas reiciendis debitis architecto. Reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nobis reiciendis temporibus nisi illum eligendi! Sequi fugiat nihil nulla magni rem ipsum optio, soluta nisi natus saepe, nobis similique ut.</p></div></div></section>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderFocusGame({
        id: '2',
        game: 'diablo-3',
        detail_page_image: `../assets/diablo-3-background.jpg`,
        detail_fixed: `../assets/diablo-fixed.jpg`,
        iframes: `https://www.youtube.com/embed/M_c1q2oMHlk`,
        game_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem optio nam labore deleniti aliquam ratione? Libero hic quod quas sed ullam similique natus, a, mollitia, officiis corporis nulla repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore nisi animi porro et mollitia perferendis amet commodi voluptatibus ipsa, tenetur fugiat eos quaerat, sit quas reiciendis debitis architecto. Reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nobis reiciendis temporibus nisi illum eligendi! Sequi fugiat nihil nulla magni rem ipsum optio, soluta nisi natus saepe, nobis similique ut.`,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
