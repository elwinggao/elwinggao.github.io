let container = document.getElementById("container");
let flower = document.getElementById("flowerShop");
let sample = document.getElementById("samples");
let product = document.getElementById("product");


// let season = ["spring", "summer", "fall", "winter"];

let slider = document.getElementById("myRange");
    let value = slider.value;

function changeBackgroundColor() {
    let slider = document.getElementById("myRange");
    let value = slider.value;
    let color = "hsl(" + value + ", 75%, 75%)";
    document.body.style.background =  "url('images/vignette.png'), " + color;
    document.body.style.backgroundBlendMode = "color";
    document.body.style.backgroundSize = "cover";
}




// if (document.getElementById("myRange").value > 150) {sample.innerHTML = "peonies, calla lilies, chrysanthemums, roses"};
// if (150 > document.getElementById("myRange").value > 75 ) {sample.innerHTML = "carnations, tulips, ranunculus, wax flowers"};

let season;


let month = document.getElementById("month");


function changeMonth() {

    if (slider.value >= 150 && slider.value <= 200) {season = "winter";}
else if (149 >= slider.value && slider.value >= 100) {season = "spring";}
else if (99 >= slider.value && slider.value >= 60) {season = "summer";}
else if (59 >= slider.value && slider.value >= 25) {season = "fall";}
    month.innerHTML = season;
};

// let occasion = document.getElementById("occasion");
// if (occasion.value = "love") {product.style.backgroundColor = "red"};

let love = document.getElementById("love");
let congrats = document.getElementById("congrats");
let gratitude = document.getElementById("gratitude");
let mourning = document.getElementById("mourning");
let friendship = document.getElementById("friendship");

function trackCheck() {

    if(love.checked){
        product.style.color = "red";
    }
    else if (congrats.checked){
        product.style.color = "orange";
    }
    else if (mourning.checked){
        product.style.color = "grey";
    }
    else if (gratitude.checked){
        product.style.color = "pink";
    }
    else if (friendship.checked){
        product.style.color = "yellow";
    }
    else {
        product.style.color = "black";
    }
}

let recipient = document.getElementById("text");

function changeText() {
    // product.innerHTML = 
    // "<div> for " + recipient.value + "</div>" + "<img id='bouquet' src='images/bouquet.png'>";
    if (season == "winter" && love.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> warm in the winter </div>"}
    else if (season == "winter" && congrats.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> snow confetti </div>"}
    else if (season == "winter" && mourning.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> snowdrop remembrance </div>"}
    else if (season == "winter" && gratitude.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> firelight gratitude </div>"}
    else if (season == "winter" && friendship.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> flurry friends </div>"}

    else if (season == "spring" && love.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> blooming romance </div>"}
    else if (season == "spring" && congrats.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> new beginnings </div>"}
    else if (season == "spring" && mourning.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> fresh memories </div>"}
    else if (season == "spring" && gratitude.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='spring' src='images/bouquet.png'>" 
        + "<div> grateful blossoms </div>"}
    else if (season == "spring" && friendship.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='spring' src='images/bouquet.png'>" 
        + "<div> best buds </div>"}

    else if (season == "summer" && love.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> sun-kissed sun kisses </div>"}
    else if (season == "summer" && congrats.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> bright futures </div>"}
    else if (season == "summer" && mourning.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> bygone blossoms </div>"}
    else if (season == "summer" && gratitude.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> sunshine and starlight </div>"}
    else if (season == "summer" && friendship.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> sunset silhouettes </div>"}

    else if (season == "fall" && love.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> falling in love </div>"}
    else if (season == "fall" && congrats.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> colors of change </div>"}
    else if (season == "fall" && mourning.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> leaving behind </div>"}
    else if (season == "fall" && gratitude.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> giving thanks </div>"}
    else if (season == "fall" && friendship.checked) {
        product.innerHTML = "<div> for " + recipient.value + "</div>" 
        + "<img id='bouquet' src='images/bouquet.png'>" 
        + "<div> fall friends </div>"};

    // else {"<div> for " + recipient.value + "</div>" 
    // + "<img id='bouquet' src='images/bouquet.png'>" 
    // + "<div> yep </div>"};
}

function makeFlower() {
    if (recipient.value !== "") {
    product.classList.add("on");
    }
};

// function pickLove {
//     product.classList.add("love")
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

