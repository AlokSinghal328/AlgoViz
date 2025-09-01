import { randomArray } from "../src/randomArray.js";
import { plotArray } from "../src/visualSorting.js";

const stopBtn = document.querySelector("#stop-btn");

let array = [];
let sorted = [];
let speed = 80;
let isPaused = false;
let isStarted = false;
let isStoped = false;
let arraySize = 25;

function init() {
  document.querySelector(".input-space").addEventListener("input", (e) => {
    if (!isStarted) {
      arraySize = parseInt(e.target.value);
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
      isStoped = false;
      bubbleSort();
    }
  });

  document.querySelectorAll(".speed-btn span").forEach((btn) => {
    btn.addEventListener("click", () => {
      let btnValue = parseFloat(btn.innerText.replace("x", ""));
      speed = 100 / btnValue;
    });
  });

  stopBtn.addEventListener("click", (e) => {
    isPaused = !isPaused;
    e.target.innerText = isPaused ? "Start" : "Stop";
  });

  document.querySelector("#reset-btn").addEventListener("click", () => {
    array = [];
    plotArray([]);
    isStarted = false;
    isPaused = false;
    isStoped = true;

    stopBtn.innerText = "Stop";
  });
}

async function bubbleSort() {
  isStarted = true;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (isStoped) return;
      while (isPaused) await new Promise((r) => setTimeout(r, 200));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      plotArray(array, [j, j + 1], sorted);
      await new Promise((r) => setTimeout(r, speed));
    }
    sorted.push(array.length - i - 1);
  }
  plotArray(array, []);
  isStarted = false;
}

init();
