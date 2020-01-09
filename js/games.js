// hide button reset
visibility('resetButtonId', false);
// define setTime variable
const PLAY_DELAY = 2000;
// create to get image
const IMAGE_FILES = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
// function getImage
var getImage = () => {
    var images = "";
    for (let i = 0; i < 3; i++) {
        var image = IMAGE_FILES[Math.floor(Math.random() * IMAGE_FILES.length)];
        var resultImage = image;
        images += `
            <img src="images/${resultImage}" width="100px">
        `;
    }
    return images;
}
// function set message
function setHTML(text) {
    var result = document.querySelector('#resultId');
    result.innerHTML = text;
}
// function set element
function visibility(element, isvisible) {
    var property = isvisible ? "block" : "none";
    document.querySelector('#' + element).style.display = property;
}
// function button play
var onPlayClicked = () => {
    setHTML("Wait....");
    // set delay
    setTimeout(() => {
        setHTML(getImage());
        // hide button play
        visibility('playButtonId', false);
        // show button reset
        visibility('resetButtonId', true);
    }, PLAY_DELAY);
}
// function button reset
var onResetClicked = () => {
    // show button play
    visibility('playButtonId', true);
    // hide button reset
    visibility('resetButtonId', false);
    setHTML("Clear....");
}

// output button play
const buttonPlay = document.querySelector("#playButtonId");
buttonPlay.addEventListener('click', onPlayClicked);
// output button reset
const buttonReset = document.querySelector("#resetButtonId");
buttonReset.addEventListener('click', onResetClicked);