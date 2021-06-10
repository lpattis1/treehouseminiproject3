// Variables

const main = document.querySelector("main");
let html = ``;
let red;
let green;
let blue;
let color;

// ------------------------

// Function

/**
 * A function that returns a randomized RGB color value.
 * @param  {number} color - a parameter that supplements a specified color value.
 * @return  {number} returns the randomized color.
 */

function randomColor(color) {
  return Math.floor(Math.random() * color);
}

// ------------------------

// Loop

for (let i = 1; i <= 10; i++) {
  red = randomColor(256);
  green = randomColor(256);
  blue = randomColor(256);
  color = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${color}">${i}</div>`;
}

// ------------------------

// Display Results
main.innerHTML = html;
