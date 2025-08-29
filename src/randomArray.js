export function randomArray(size, min, max) {
  return new Array(size)
    .fill(0)
    .map(() => Math.floor(Math.random() * max - min + 1) + min);
}

