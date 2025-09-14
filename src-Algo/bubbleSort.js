// src/algorithms/bubbleSort.js

import { delay } from "./utils/utils.js";
import { AppState } from "../src-Algo/core/state.js";

export async function bubbleSort(update, getState) {
  const { array } = AppState;
  const sorted = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const { isPaused, isStopped, speed } = getState();

      if (isStopped) return;

      while (getState().isPaused) {
        await delay(100);
        if (getState().isStopped) return;
      }

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }

      update([...array], [j, j + 1], [...sorted]);
      await delay(speed);
    }
    sorted.push(array.length - i - 1);
  }

  update([...array], [], [...sorted]);
  
}
