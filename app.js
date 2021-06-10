// Variables
const main = document.querySelector("main");
let html = ``;
let red;
let green;
let blue;
let color;

// Loop
for (let i = 1; i <= 10; i++) {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  color = `rgb( ${red}, ${green}, ${blue} )`;
  html += `<div style="background-color: ${color}">${i}</div>`;
}

main.innerHTML = html;
