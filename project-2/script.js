let c1 = document.getElementById("container");
let c2 = document.getElementById("container2");
let c2a = document.getElementById("container2a");
let c3 = document.getElementById("container3");
let c4 = document.getElementById("container4");
let c5 = document.getElementById("container5");

let shoes = document.getElementById("shoesoff");
let pallet = document.getElementById("pallet");
let me = document.getElementById("me");

// function shoesOff() {
//     c1.classList.add("off");
//     c2.classList.add("off");
//     c2a.classList.add("off");
//     c3.classList.remove("off");
//     c4.classList.add("off");
// }

function shoesOff() {
    window.location.href="interior.html";
};

function sink() {
    shoes.style.opacity = "0";
};

window.addEventListener("load", () => {
    pallet.style.opacity = 1;
  });

function wow() {
    me.style.opacity = "0"
}

  function shoesOn() {
    window.location.href="surprise.html";
};

// me.onclick = function() {
//     window.location.href="surprise.html";
//   }

// const promise1 = new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 1 resolved"), 1000)
// );
// const promise2 = new Promise((resolve) =>
//     setTimeout(() => resolve("Promise 2 resolved"), 500)
// );

// me.onclick = function() {
//     promise1
//         .then((result1) => {
//             console.log(result1);
//             me.style.opacity = "0";
//             return promise2;
//         })
//         .then((result2) => {
//             console.log(result2);
//             window.location.href="surprise.html";
//         });
// };