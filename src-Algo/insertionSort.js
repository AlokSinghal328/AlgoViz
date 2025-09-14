import { delay } from "./utils/utils.js";
import { AppState } from "../src-Algo/core/state.js";

export async function insertionSort(update, getState) {
  const { array } = AppState;
  const sorted = [0];

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    const { speed } = getState();

    while (j >= 0 && array[j] > key) {
      const { isPaused, isStopped } = getState();
      if (isStopped) return;
      while (isPaused) await delay(100);

      array[j + 1] = array[j];
      j--;

      update([...array], [j, j + 1], [...sorted]);
      await delay(speed);
    }

    array[j + 1] = key;
    sorted.push(i);
    update([...array], [], [...sorted]);
    await delay(speed);
  }
}
