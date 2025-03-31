let container = document.getElementById("container");
let flower = document.getElementById("flowerShop");
let sample = document.getElementById("samples");
let product = document.getElementById("product");


let season = ["spring", "summer", "fall", "winter"];
let spring = []

function changeBackgroundColor() {
    let slider = document.getElementById("myRange");
    let value = slider.value;
    let color = "hsl(" + value + ", 75%, 75%)";
    document.body.style.background =  "url('images/vignette.png'), " + color;
    document.body.style.backgroundBlendMode = "color";
}

let recipient = document.getElementById("text");

function changeText() {
    product.innerHTML = "<div> for " + recipient.value + "</div>" + "<img id='bouquet' src='images/bouquet.png'>";
}

function makeFlower() {
    product.classList.add("on");
}

// if (document.getElementById("myRange").value > 150) {sample.innerHTML = "peonies, calla lilies, chrysanthemums, roses"};
// if (150 > document.getElementById("myRange").value > 75 ) {sample.innerHTML = "carnations, tulips, ranunculus, wax flowers"};

// let monthInput = document.getElementById("month");
// let month = monthInput.value;
// if (month = 1) {let season = "winter";}
// else if (month = 2) {let season = "winter";}
// else if (month = 3) {let season = "spring";}
// else if (month = 4) {let season = "spring";}
// else if (month = 5) {let season = "spring";}
// else if (month = 6) {let season = "summer";}
// else if (month = 7) {let season = "summer";}
// else if (month = 8) {let season = "summer";}
// else if (month = 9) {let season = "fall";}
// else if (month = 10) {let season = "fall";}
// else if (month = 11) {let season = "fall";}
// else if (month = 12) {let season = "winter";}


// function changeMonth() {
//     flower.classList.add(season);
// }

// function makeSpring() {
//     flower.classList.remove("summer", "fall", "winter");
//     flower.classList.add("spring");
//   }

// function makeSummer() {
//     flower.classList.remove("spring", "fall", "winter");
//     flower.classList.toggle("summer");
//   }

// function makeFall() {
//     flower.classList.remove("summer", "spring", "winter");
//     flower.classList.toggle("fall");
//   }

// function makeWinter() {
//     flower.classList.remove("summer", "fall", "spring");
//     flower.classList.toggle("winter");
//   }

