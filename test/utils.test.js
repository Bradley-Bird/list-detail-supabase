import { renderGameCard } from "../render.utils.js";

const test = QUnit.test;

test('should return li with div and image/classes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="dropdown halo"><span class="link">Halo 3</span><div class="dropdown-img"><img class="halo-img" src="./assets/halo-3-main.png" alt=""></div></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGameCard({
        game: 'Halo 3',
        home_page_image: '/assets/halo-3-main.png',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
