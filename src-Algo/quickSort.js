import { delay } from "./utils/utils.js";
import { AppState } from "../src-Algo/core/state.js";

export async function quickSort(update, getState) {
  const arr = AppState.array;

  async function quickSortHelper(low, high) {
    if (low < high) {
      const pi = await partition(low, high);
      await quickSortHelper(low, pi - 1);
      await quickSortHelper(pi + 1, high);
    }
  }

  async function partition(low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      const { isPaused, isStopped, speed } = getState();
      if (isStopped) return high;
      while (isPaused) await delay(100);

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      update([...arr], [i, j, high], []);
      await delay(speed);
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    update([...arr], [i + 1, high], []);
    await delay(getState().speed);

    return i + 1;
  }

  await quickSortHelper(0, arr.length - 1);

  update([...arr], [], arr.map((_, i) => i)); // All sorted
}
