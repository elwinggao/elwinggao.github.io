let green = document.getElementById("green");
let white = document.getElementById("white");
let yellow = document.getElementById("yellow");
let black = document.getElementById("black");
let puerhRaw = document.getElementById("puerhRaw");
let puerhRipe = document.getElementById("puerhRipe");

let teaType = document.getElementById("teaType");

let stream = document.getElementById("stream");
let fill = document.getElementById("fill");

let pot = document.getElementById("pot");
let temperature = document.getElementById("temperature");
let quantity = document.getElementById("quantity");
let ratio = document.getElementById("ratio");
let notes = document.getElementById("notes");

const dropdown = document.getElementById('teaType');

dropdown.addEventListener('change', function () {
    if (green.selected == true){
        stream.style.background = "#c5be7a";
        fill.style.background = "#c5be7a";
        pot.innerHTML = "gaiwan, glass cup";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "3-4 grams";
        ratio.innerHTML = "Water to Tea: 1:50";
    }
    else if (white.selected == true){
        stream.style.background = "#eee4c4";
        fill.style.background = "#eee4c4";
        pot.innerHTML = "gaiwan";
        temperature.innerHTML = ">95°C";
        quantity.innerHTML = "5 grams";
        ratio.innerHTML = "Water to Tea: 1:30";
    }
    else if (yellow.selected == true){
        stream.style.background = "#b6a350";
        fill.style.background = "#b6a350";
        pot.innerHTML = "gaiwan, glass";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "3-4 grams";
        ratio.innerHTML = "Water to Tea: 1:50";
    }
    else if (black.selected == true){
        stream.style.background = "#964b2e";
        fill.style.background = "#964b2e";
        pot.innerHTML = "gaiwan, piaoyi cup/glass pot";
        temperature.innerHTML = ">95°C";
        quantity.innerHTML = "4 grams";
        ratio.innerHTML = "Water to Tea: 1:40";
    }
    else if (puerhRaw.selected == true){
        stream.style.background = "#995e2d";
        fill.style.background = "#995e2d";
        pot.innerHTML = "gaiwan, clay teapot";
        temperature.innerHTML = ">100°C";
        quantity.innerHTML = "8 grams";
        ratio.innerHTML = "Water to Tea: 1:20";
    }
    else if (puerhRipe.selected == true){
        stream.style.background = "#b44327";
        fill.style.background = "#b44327";
        pot.innerHTML = "gaiwan, clay teapot";
        temperature.innerHTML = ">100°C";
        quantity.innerHTML = "6 grams";
        ratio.innerHTML = "Water to Tea: 1:20";
    }
    else if (floral.selected == true){
        stream.style.background = "pink";
        fill.style.background = "pink";
        pot.innerHTML = "gaiwan";
        temperature.innerHTML = "95°C";
        quantity.innerHTML = "4 grams";
        ratio.innerHTML = "Water to Tea: 1:40";
    }
    else {
        stream.style.color = "#bd8d4ec0";
    }
});

// function teaTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = 0;
//             // timer = duration; // uncomment this line to reset timer automatically after reaching 0
//         }
//     }, 1000);
// }

// function startTimer() {
//     if (green.selected == true) { 
//     var time = 10,
//         display = document.querySelector('#safeTimerDisplay');
//     teaTimer(time, display);
//     }
//     else if (yellow.selected == true) { 
//         var time = 30,
//             display = document.querySelector('#safeTimerDisplay');
//         teaTimer(time, display);
//         }
// };


function updateSeason() {

    let today = new Date();
    let thisMonth = today.getMonth();
    // let thisHour = today.getHours();
    // let thisMinute = today.getMinutes();
    // let thisSecond = today.getSeconds();
    
    // let hours = document.getElementById("hour");
    // let minutes = document.getElementById("minutes");
    // let seconds = document.getElementById("seconds"); 
    

const teapot = document.getElementById("teapot");
const stream = document.getElementById("stream");
const fill = document.getElementById("fill");
const pourSound = document.getElementById("pourSound");
const steamContainer = document.getElementById("steamContainer");

const startButton = document.getElementById("startButton");
const pourButton = document.getElementById("pourButton");
const resetButton = document.getElementById("resetButton");

let steamInterval;

startButton.addEventListener("click", () => {
    const duration = parseInt(teaType.value, 10);
    startButton.style.display = "none";
    emitSteam(duration);
  });

// startButton.addEventListener("click", () => {
//     startButton.style.display = "none";
//     // emitSteam(10);
//     if (green.selected == true) { 
//         var time = 10
//         }
//     else if (yellow.selected == true) { 
//         var time = 20,
//         }
//     else if (white.selected == true) { 
//         var time = 30,
//         }
//     else if (black.selected == true) { 
//         var time = 30,
//         }
//     else if (puerhRaw.selected == true) { 
//         var time = 10,
//         }
//     else if (puerhRipe.selected == true) { 
//         var time = 10,
//         }
//     else if (floral.selected == true) { 
//         var time = 30,
//         };
    
//     emitSteam(time);
// });

pourButton.addEventListener("click", () => {
  pourButton.style.display = "none";
  pourTea();
});

resetButton.addEventListener("click", resetAll);

function emitSteam(duration) {
  let elapsed = 0;
  steamInterval = setInterval(() => {
    createSteamPuff();
    elapsed += 0.5;
    if (elapsed >= duration) {
      clearInterval(steamInterval);
      pourButton.style.display = "inline-block";
    }
  }, 500);
}

function createSteamPuff() {
  const line = document.createElement("div");
  line.classList.add("steam");

  const driftX = (Math.random() - 0.5) * 20;
  const duration = Math.random() * 1 + 2;

  line.style.setProperty('--drift-x', `${driftX}px`);
  line.style.animationDuration = `${duration}s`;

  steamContainer.appendChild(line);
  setTimeout(() => steamContainer.removeChild(line), duration * 1000);
}

function pourTea() {
  teapot.style.transform = "translate(0px,-100px) rotate(25deg)";

  setTimeout(() => {
    stream.style.height = "80px";
    pourSound.play();
    }, 1000);

  setTimeout(() => {
    fill.style.height = "40px";
  }, 1000);

  setTimeout(() => {
    stream.style.height = "0";
  }, 3000);

  setTimeout(() => {
    teapot.style.transform = "rotate(0deg)";
    resetButton.style.display = "inline-block";
  }, 4000);
}

function resetAll() {
  // Reset visual states
  teapot.style.transform = "rotate(0deg)";
  stream.style.height = "0";
  fill.style.height = "0";

  // Clear any remaining steam
  steamContainer.innerHTML = "";

  // Reset buttons
  resetButton.style.display = "none";
  pourButton.style.display = "none";
  startButton.style.display = "inline-block";
}


      
    console.log(thisMonth);

    if (thisMonth >= 2 && thisMonth <= 4) {
        document.body.style.backgroundImage = "url('images/spring.png')";
        document.body.style.backgroundSize = "cover";
    }
    else if (thisMonth >= 5 && thisMonth <= 7) {
        document.body.style.backgroundImage = "url('images/summer.png')";
        document.body.style.backgroundSize = "cover";
    }
    else if (thisMonth >= 8 && thisMonth <= 11) {
        document.body.style.backgroundImage = "url('images/fall.png')";
        document.body.style.backgroundSize = "cover";
    }
    else if (thisMonth >= 12 && thisMonth <= 2) {
        document.body.style.backgroundImage = "url('images/winter.png')";
        document.body.style.backgroundSize = "cover";
    }
    };

    document.body.onload = updateSeason();
    // setInterval(updateSeason, 1000);


