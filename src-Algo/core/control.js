// src/core/controller.js

import { AppState } from "./state.js";
import { plotArray } from "../ui/plotArray.js";

export async function runAlgorithm(algoFn) {
  const update = (array, highlight = [], sorted = []) => {
    AppState.array = array;
    AppState.sortedIndices = sorted;
    plotArray(array, highlight, sorted);
  };

  const getState = () => ({
    isPaused: AppState.isPaused,
    isStopped: AppState.isStopped,
    speed: AppState.speed,
  });

  await algoFn(update, getState);

  AppState.isStarted = false;
}
