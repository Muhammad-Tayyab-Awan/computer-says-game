let msg = document.querySelector(".msg");
let gameStart = false;
let level = 0;
function gameStarted() {
  level++;
  msg.innerText = `Level ${level}`;
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
