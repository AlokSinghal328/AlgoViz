// src/ui/plotArray.js

export function plotArray(array, highlight = [], sorted = []) {
  const container = document.querySelector("#displayArea");
  container.innerHTML = "";

  const contWidth = Math.floor(container.clientWidth * 0.9);
  const barWidth = Math.min(Math.floor(contWidth / array.length), 20);
  const fontSize = Math.min(barWidth, 13);

  array.forEach((value, idx) => {
    const bar = document.createElement("div");

    let bgColor = "#0072BB"; // default
    if (sorted.includes(idx)) {
      bgColor = "#008000";
    }
    if (highlight.includes(idx)) {
      bgColor = "#FF0000";
    }

    bar.className = `w-[${barWidth}px] h-[${
      (value / 100) * 95
    }%] bg-[${bgColor}] relative`;

    const label = document.createElement("span");
    label.textContent = value;
    label.className = "text-black w-full -top-6 text-center absolute";
    label.style.fontSize = `${fontSize}px`;

    bar.appendChild(label);
    container.appendChild(bar);
  });
}
