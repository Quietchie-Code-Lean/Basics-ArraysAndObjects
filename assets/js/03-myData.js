/* myData.html */

console.log("JS loaded");

let myData = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952]

const data = document.querySelector("#data")

for (let value of myData){
if (value > 1000 && value < 2000){
    let li = document.createElement("li");
    li.textContent = `${value}`;
    li.style.color = "green";
    data.appendChild(li);
}else{
    let li = document.createElement("li");
    li.textContent = `${value}`;
    li.style.color = "red";
    data.appendChild(li);
    
}};
