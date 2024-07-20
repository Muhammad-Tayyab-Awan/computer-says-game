let compInput = [];
let userInput = [];
let msg = document.querySelector(".msg");
let gameStart = false;
let level = 0;
let boxes = document.querySelectorAll(".roundBox");
let resetBtn = document.querySelector("#reset");
let userTurn = false;
let userInCount = 0;
let bodyColor = document.querySelector("#body");
async function gameStarted() {
  resetBtn.classList.remove("disable");
  level++;
  msg.innerText = `Level : ${level}`;
  let box = randBox();
  await flashBox(box);
  let compIn = box.getAttribute("id");
  compInput.push(compIn);
}
function randBox() {
  let randomIdx = Math.floor(Math.random() * 4);
  let box = boxes[randomIdx];
  return box;
}
addEventListener("keypress", function (evt) {
  if (gameStart == false) {
    gameStart = true;
    userTurn = true;
    gameStarted();
  }
});
addEventListener("click", function (evt) {
  if (gameStart == false) {
    gameStart = true;
    userTurn = true;
    gameStarted();
  }
});
function gameOver() {
  bodyColor.classList.add("red");
  msg.innerText = `GAME OVER! Your Score : ${level}`;
}
function flashBox(box) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      box.classList.add("flash");
    }, 200);
    setTimeout(() => {
      box.classList.remove("flash");
      resolve();
    }, 1000);
  });
}
function compArray(arr1, arr2) {
  let length, valuesEqual;
  if (arr1.length == arr2.length) {
    length = arr1.length;
    valuesEqual = 0;
    for (let i = 0; i < length; i++) {
      if (arr1[i] === arr2[i]) {
        valuesEqual++;
      }
    }
  }
  return valuesEqual === length;
}
async function levelUp() {
  userTurn = false;
  userInCount = 0;
  level++;
  msg.innerText = `Level : ${level}`;
  let box = randBox();
  await flashBox(box);
  let compIn = box.getAttribute("id");
  compInput.push(compIn);
  userTurn = true;
}
async function startingGame(box) {
  await flashBox(box);
  let userIn = box.getAttribute("id");
  userInput.push(userIn);
  userInCount++;
  let areEqual = compArray(compInput, userInput);
  if (areEqual === true && userInCount === compInput.length) {
    userInput = [];
    levelUp();
  } else if (
    userInCount <= compInput.length &&
    compArray(userInput, compInput.slice(0, userInput.length)) !== true
  ) {
    gameOver();
  } else if (userInCount > compInput.length) {
    gameOver();
  }
}
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (evt) => {
    if (gameStart === true && userTurn === true) {
      startingGame(boxes[i]);
    }
  });
}
function resetGame() {
  if (gameStart === true) {
    gameStart = false;
    userTurn = false;
    userInCount = 0;
    msg.innerText = "Press Any Key or Tap on Screen Any Where To Start";
    compInput = [];
    userInput = [];
    level = 0;
    bodyColor.classList.remove("red");
    resetBtn.classList.add("disable");
  }
}
resetBtn.addEventListener("dblclick", resetGame);
