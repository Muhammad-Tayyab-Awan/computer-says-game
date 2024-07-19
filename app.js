let compInput = [];
let userInput = [];
let msg = document.querySelector(".msg");
let gameStart = false;
let level = 0;
let boxes = document.querySelectorAll(".roundBox");
function gameStarted() {
  level++;
  msg.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 4);
  let box = boxes[randomIdx];
  box.classList.add("flash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 300);
  let compIn = box.getAttribute("id");
  compInput.push(compIn);
}
addEventListener("keypress", function (evt) {
  if (gameStart == false) {
    console.log("Event Occured");
    gameStart = true;
    gameStarted();
  }
});
addEventListener("click", function (evt) {
  if (gameStart == false) {
    gameStart = true;
    gameStarted();
  }
});
