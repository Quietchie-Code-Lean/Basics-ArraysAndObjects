/* 01-names.html */

let ArrayData = ['Javiera', 'Camila', 'Francisco', 'Jorge', 'Daniela'];


let d = document.querySelector("#names");

for (let item of ArrayData){
    d.innerHTML += '<li>' + item + '</li>'
}

/* 02-prices.html */

let ArrayPrices = [1000, 2500, 3100, 4800, 7500]

let d2 = document.querySelector("#prices")
let html = ""
for (let item of ArrayPrices){
html += `<li> + ${item} + </li>`;  /* Interpolation applied */
}
d2.innerHTML = html

