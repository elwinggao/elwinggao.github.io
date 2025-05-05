
let green = document.getElementById("green");
let white = document.getElementById("white");
let yellow = document.getElementById("yellow");
let black = document.getElementById("black");
let puerhRaw = document.getElementById("puerhRaw");
let puerhRipe = document.getElementById("puerhRipe");

let teaType = document.getElementById("teaType");

let pot = document.getElementById("pot");
let temperature = document.getElementById("temperature");
let quantity = document.getElementById("quantity");
let ratio = document.getElementById("ratio");
let notes = document.getElementById("notes");

const dropdown = document.getElementById('teaType');

dropdown.addEventListener('change', function () {
    if (green.selected == true){
        tea.style.color = "green";
        pot.innerHTML = "gaiwan, glass cup";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "3-4 grams";
        ratio.innerHTML = "Water to Tea: 1:50";
    }
    else if (white.selected == true){
        tea.style.color = "white";
        pot.innerHTML = "gaiwan";
        temperature.innerHTML = ">95°C";
        quantity.innerHTML = "5 grams";
        ratio.innerHTML = "Water to Tea: 1:30";
    }
    else if (yellow.selected == true){
        tea.style.color = "yellow";
        pot.innerHTML = "gaiwan, glass";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "3-4 grams";
        ratio.innerHTML = "Water to Tea: 1:50";
    }
    else if (black.selected == true){
        tea.style.color = "black";
        pot.innerHTML = "gaiwan, piaoyi cup/glass pot";
        temperature.innerHTML = ">95°C";
        quantity.innerHTML = "4 grams";
        ratio.innerHTML = "Water to Tea: 1:40";
    }
    else if (puerhRaw.selected == true){
        tea.style.color = "brown";
        pot.innerHTML = "gaiwan, clay teapot";
        temperature.innerHTML = ">100°C";
        quantity.innerHTML = "8 grams";
        ratio.innerHTML = "Water to Tea: 1:20";
    }
    else if (puerhRipe.selected == true){
        tea.style.color = "red";
        pot.innerHTML = "gaiwan, clay teapot";
        temperature.innerHTML = ">100°C";
        quantity.innerHTML = "6 grams";
        ratio.innerHTML = "Water to Tea: 1:20";
    }
    else if (floral.selected == true){
        tea.style.color = "pink";
        pot.innerHTML = "gaiwan";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "4 grams";
        ratio.innerHTML = "Water to Tea: 1:40";
    }
    else {
        tea.style.color = "grey";
    }
});

function teaTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

function startTimer() {
    if (green.selected == true) { 
    var time = 10, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    teaTimer(time, display);
    }
};