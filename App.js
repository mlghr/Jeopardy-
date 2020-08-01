const WIDTH = 6;
const LENGTH = 6;
const gameTable = document.getElementById("game-table");
let resArr = [];
let categoryRow = [];
let dataRowOne = [];
let dataRowTwo = [];
let dataRowThree = [];
let dataRowFour = [];
let dataRowFive = [];


// 000-row will be for category titles, the rest correspond to their point value
function makeTable() {
  let count = -1;
  let randomId = Math.floor(Math.random() * 100);
  for (let i = 0; i < WIDTH; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('class', 'row');
    gameTable.appendChild(tr);
    count++;
    for (let j = 0; j < LENGTH; j++) {
      let td = document.createElement('td');
      td.setAttribute('class', `table-data ${count}00-row'`);
      td.setAttribute('id', `category-${count}`)
      if (count === 0) {
        }
      if(count > 0) {
        td.textContent = "?"
      }
      if (count === 1) {
        dataRowOne.push(td);
        td.addEventListener("click", 
        (e) => {
          e.target.textContent = dataRowOne[randomId];
            });
      }
      if (count === 2) {
        dataRowTwo.push(td);
        td.addEventListener("click", 
        (e) => {
          e.target.textContent = "hi";
            });
      }
      if (count === 3) {
        dataRowThree.push(td);
        td.addEventListener("click", 
        (e) => {
          e.target.textContent = "hi";
            });
      }
      if (count === 4) {
        dataRowFour.push(td);
        td.addEventListener("click", 
        (e) => {
          e.target.textContent = dataRowFour[randomId]
            });
          }
      if (count === 5) {
        dataRowFive.push(td);
        td.addEventListener("click", 
        (e) => {
          e.target.textContent = "hi";
            });
          }
      td.style.color = "blue";
      td.style.width = "100px";
      td.style.height = "50px";
      td.style.position = "relative";
      tr.appendChild(td);
    }
  }
}

async function getCategories() {
  let res = await axios.get(`https://jservice.io/api/categories?count=${LENGTH}`);
  let randomId = Math.floor(Math.random() * 6);
  console.log(res);
    for (i = 0; i < res.data.length; i++) {
      head = res.data[i].title;
      console.log(head)
  }
}


async function getAnswer() {
  let res = await axios.get("http://jservice.io/api/clues");
}


makeTable();
getCategories();

