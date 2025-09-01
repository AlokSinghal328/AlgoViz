import { randomArray } from "../src/randomArray.js";
import { plotArray } from "../src/visualSorting.js";

const inputSpace = document.querySelector(".input-space");
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
      selectionSort();
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
    sorted = [];
    plotArray([], [], []);
    isStarted = false;
    isPaused = false;
    isStoped = true;

    stopBtn.innerText = "Stop";
  });
}

async function selectionSort() {
  sorted = [];
  isStarted = true;
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (isStoped) return;
      while (isPaused) await new Promise((r) => setTimeout(r, 200));
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
      plotArray(array, [minIdx, j], sorted);

      await new Promise((r) => setTimeout(r, speed));
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
    sorted.push(i);
  }

  plotArray(array, [], sorted);
  isStarted = false;
}

init();
