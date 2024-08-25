const time = document.querySelector(".count");
const body = document.querySelector("body");
// const minute = document.querySelector(".minute");

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let timeCount = 1500;
let minute = 0;
let second = 0;
let timeFormat = ``;

function uptateTime() {
  minute = Math.floor(timeCount / 60);
  second = timeCount % 60;
  timeFormat = `${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;

  console.log(timeFormat);

  time.textContent = timeFormat;

  setInterval;
}

function startTime() {
  interval = setInterval(() => {
    timeCount--;
    uptateTime();
    if (timeCount === 0) {
      body.innerHTML += ` <audio autoplay >
      <source src="./SRC/Audio.mp3" type="audio/mp3" />
    </audio>`;
      clearInterval(interval);

      timeCount = 1500;
      uptateTime();
    }
  }, 1000);
}

function stopTime() {
  clearInterval(interval);
}

function resetTime() {
  clearInterval(interval);
  timeCount = 1500;
  uptateTime();
}

start.addEventListener("click", (e) => {
  startTime();
});

stop.addEventListener("click", (e) => {
  stopTime();
});

reset.addEventListener("click", (e) => {
  resetTime();
});
