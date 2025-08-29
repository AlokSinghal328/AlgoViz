import { randomArray } from "../src/randomArray.js";
import { plotArray } from "../src/visualSorting.js";

let array = [];
let speed = 80;
let isPaused = false;
let isStarted = false;
let isStoped = false;
let arraySize = 25;

function init() {
  document.querySelector(".input-space").addEventListener("input", (e) => {
    if (!isStarted) {
      arraySize = parseInt(e.target.value);
    } else {
    }
  });

  document.querySelector(".random-btn").addEventListener("click", () => {
    if (!isStarted) {
      array = randomArray(arraySize, 5, 100);
      plotArray(array);
    }
  });

  document.querySelector(".start-btn").addEventListener("click", () => {
    if (!isStarted) {
      bubbleSort();
    }
  });

  document.querySelectorAll(".speed-btn span").forEach((btn) => {
    btn.addEventListener("click", () => {
      let btnValue = parseFloat(btn.innerText.replace("x", ""));
      speed = 100 / btnValue;
    });
  });

  document.querySelector("#stop-btn").addEventListener("click", (e) => {
    isPaused = !isPaused;
    e.target.innerText = isPaused ? "Start" : "Stop";
  });

  document.querySelector("#reset-btn").addEventListener("click", () => {
    array = [];
    plotArray([]);
    isStarted = false;
    isStoped = true;
  });
}

async function bubbleSort() {
  isStarted = true;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if(isStoped) return;
      while (isPaused) await new Promise((r) => setTimeout(r, 200));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        plotArray(array, [j, j + 1]);
      }
      await new Promise((r) => setTimeout(r, speed));
    }
  }
  plotArray(array, []);
  isStarted = false;
}

init();
