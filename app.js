let compInput = [];
let userInput = [];
let msg = document.querySelector(".msg");
let gameStart = false;
let level = 0;
function gameStarted() {
  level++;
  msg.innerText = `Level ${level}`;
  let randomIdx = Math.floor(Math.random() * 4);
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
    console.log("Event Occured");
    gameStart = true;
    gameStarted();
  }
});
