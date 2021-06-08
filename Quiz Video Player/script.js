// Write javascript code here
const playbtn = document.getElementById("play");
const pause = document.getElementById("pause");

let content = document.querySelector(".video-player").firstElementChild;


playbtn.addEventListener("click", function  () {
  content.play();
});

pause.addEventListener("click", function  () {
  content.pause();
});

