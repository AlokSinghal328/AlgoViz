import { delay } from "./utils/utils.js";
import { AppState } from "../src-Algo/core/state.js";

export async function mergeSort(update, getState) {
  const arr = AppState.array;

  async function mergeSortHelper(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSortHelper(start, mid);
    await mergeSortHelper(mid + 1, end);
    await merge(start, mid, end);
  }

  async function merge(start, mid, end) {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);

    let i = 0,
      j = 0,
      k = start;

    while (i < left.length && j < right.length) {
      let sorted = [];
      const { isPaused, isStopped, speed } = getState();
      if (isStopped) return;
      while (isPaused) await delay(100);

      if (left[i] <= right[j]) {
        arr[k] = left[i++];
      } else {
        arr[k] = right[j++];
      }

      sorted.push(k);

      update([...arr], [k], sorted);
      await delay(speed);
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i++];
      sorted.push(k);
      update([...arr], [k], sorted);
      await delay(getState().speed);
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j++];
      sorted.push(k);
      update([...arr], [k], sorted);
      await delay(getState().speed);
      k++;
    }

    await delay(100);
  }

  await mergeSortHelper(0, arr.length - 1);

  update(
    [...arr],
    [],
    arr.map((_, i) => i)
  ); // All sorted
}
