// src/ui/controls.js

import { AppState } from "../core/state.js";
import { randomArray } from "../utils/utils.js";
import { plotArray } from "../ui/plotArray.js";

export function initControls(startCallback, resetCallback) {
  const stopBtn = document.querySelector("#stop-btn");
  const inputBox = document.querySelector(".input-space");
  const randomButton = document.querySelector(".random-btn");
  const startButton = document.querySelector(".start-btn");
  const speedBtns = document.querySelectorAll(".speed-btn span");
  const resetBtn = document.querySelector("#reset-btn");

  const speedMap = {
    "0.5x": 200,
    "1x": 100,
    "2x": 50,
    "4x": 25,
  };

  inputBox.addEventListener("input", (e) => {
    if (!AppState.isStarted) {
      const val = parseInt(e.target.value);
      AppState.arraySize = !isNaN(val) && val > 1 && val <= 200 ? val : 25;
    }
  });

  randomButton.addEventListener("click", () => {
    if (!AppState.isStarted) {
      AppState.array = randomArray(AppState.arraySize, 5, 100);
      plotArray(AppState.array);
    }
  });

  startButton.addEventListener("click", () => {
    if (!AppState.isStarted) {
      AppState.isStopped = false;
      AppState.isStarted = true;
      disableInputs(true);
      startCallback();
    }
  });

  stopBtn.addEventListener("click", () => {
    AppState.isPaused = !AppState.isPaused;
    stopBtn.innerText = AppState.isPaused ? "Start" : "Stop";
  });

  resetBtn.addEventListener("click", () => {
    AppState.array = [];
    AppState.sortedIndices = [];
    AppState.isStarted = false;
    AppState.isPaused = false;
    AppState.isStopped = false;
    stopBtn.innerText = "Stop";
    disableInputs(false);
    plotArray([], [], []);
    resetCallback();
  });

  speedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      speedBtns.forEach((b) => b.classList.remove("text-siteTheme"));
      btn.classList.add("text-siteTheme");
      const label = btn.innerText;
      AppState.speed = speedMap[label] || 20;
    });
  });

  function disableInputs(disabled) {
    inputBox.disabled = disabled;
    randomButton.disabled = disabled;
    startButton.disabled = disabled;
  }
}
