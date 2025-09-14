import { delay } from "./utils/utils.js";
import { AppState } from "../src-Algo/core/state.js";

export async function selectionSort(update, getState) {
  const { array } = AppState;
  const sorted = [];

  for (let i = 0; i < array.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      const { isPaused, isStopped, speed } = getState();

      if (isStopped) return;
      while (isPaused) await delay(100);

      if (array[j] < array[minIdx]) minIdx = j;

      update([...array], [j, minIdx], [...sorted]);
      await delay(speed);
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }

    sorted.push(i);
    update([...array], [], [...sorted]);
    await delay(getState().speed);
  }
}
