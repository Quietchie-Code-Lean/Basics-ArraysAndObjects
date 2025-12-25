/*  Two dimentional arrays exercise */


let stoicBooks = [
  ["Meditations", "Marcus Aurelius", 180],
  ["Letters from a Stoic", "Seneca", 65],
  ["On the Shortness of Life", "Seneca", 49],
  ["Discourses", "Epictetus", 108],
  ["Enchiridion", "Epictetus", 125],
  ["Lives of the Eminent Philosophers (Stoics section)", "Diogenes Laertius", 225],
  ["On Anger", "Seneca", 45],
  ["On Providence", "Seneca", 55]
];

let dynamic_content = "";

for(let book of stoicBooks){
  dynamic_content += `  <tr>
                            <td>${book[0]}</td>
                            <td>${book[1]}</td>
                            <td>${book[2]}</td>
                        </tr>
                        `
                      }

const tBody = document.querySelector("#table-body");
tBody.innerHTML = dynamic_content;

let table = document.querySelector(`#stoic-books-table`);
table.style.marginLeft = "auto";
table.style.marginRight = "auto";

let h3 = document.querySelector(`h3`);
h3.style.textAlign = "center";


