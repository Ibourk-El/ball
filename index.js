let fPlayer = document.querySelector(".fplayer");
let ball = document.querySelector(".ball");

let x = 0, //fplayer  var
  y = 0,
  deg = 0;
let ballX = 50,
  ballY = 50;
ball.style.left = ballX + "px";

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && e.key === "ArrowLeft") {
    console.log("hello");
  }
  if (e.key === "ArrowUp") {
    y -= 10;
    deg = -90;
  }
  if (e.key === "ArrowDown") {
    y += 10;
    deg = 90;
  }
  if (e.key === "ArrowLeft") {
    x -= 10;
    deg = 180;
  }
  if (e.key === "ArrowRight") {
    x += 10;
    deg = 0;
  }
  fPlayer.style.top = y + "px";
  fPlayer.style.left = x + "px";
  fPlayer.style.transform = `rotate(${deg}deg)`;
  contactPB();
});

// function contactPB() {
//   if () {
//     ballY += 50;
//   }
//   ball.style.left = ballX + "px";
//   ball.style.top = ballY + "px";
// }
