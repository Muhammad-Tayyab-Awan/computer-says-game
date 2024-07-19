let msg = document.querySelector(".msg");
let gameStart = false;
addEventListener("keypress", function (evt) {
  if (gameStart == false) {
    console.log("Event Occured");
    gameStart = true;
  }
});
addEventListener("click", function (evt) {
  if (gameStart == false) {
    console.log("Event Occured");
    gameStart = true;
  }
});
