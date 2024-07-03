const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#play");

function playSong() {
  audio.play();
}

playBtn.addEventListener("click", () => {
  console.log("got here");
  playSong();
});
