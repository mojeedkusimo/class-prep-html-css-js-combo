let images = [
    'benin-ringroad.jpg',
    'lagos-bridge.jpg',
    'lagos-skyline.jpg',
    'national-theatre.jpg'
];

let button = document.querySelector("button");
let imgTag = document.querySelector("img");
let counter = 1;

button.addEventListener("click", function() {
    if ( counter === 4 ) {
        counter = 0;
    }
    imgTag.src="./img/" + images[counter];
    counter = counter + 1;

});