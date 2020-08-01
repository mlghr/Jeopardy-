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
      let countTwo = -1;
      let td = document.createElement('td');
      td.setAttribute('class', `table-data ${count}00-row`);
      if (count === 0) {
        td.setAttribute('id', `category-${count}`);
        categoryRow.push(td);
        console.log(categoryRow);
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
  let res = await axios.get("http://jservice.io/api/clues?value=100");
    for (i = 0; i < LENGTH; i++) {
    let randomId = Math.floor(Math.random() * 100)
    let randomTitle = res.data[randomId].category.title;
    categoryRow.push(randomTitle)
    console.log(categoryRow);
  }
}


async function getQuestions() {
  let res = await axios.get("http://jservice.io/api/clues?category=");
    for (i = 0; i < LENGTH; i++) {
    let randomId = Math.floor(Math.random() * 100)
    let randomQ = res.data[randomId].question;
    let randomA = res.data[randomId].answer;
    dataRowOne.push(randomQ, randomA);
    console.log(dataRowOne);
  }
}

async function getAnswers() {
  let res = await axios.get("http://jservice.io/api/clues");
}



getCategories();
makeTable();