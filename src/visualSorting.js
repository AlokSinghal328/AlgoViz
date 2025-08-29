export function plotArray(array, highlight = []) {
  const container = document.querySelector("#displayArea");
  container.innerHTML = "";

  array.forEach((value, idx) => {
    const bar = document.createElement("div");

    let contWidth = container.clientWidth;
    contWidth = Math.floor(contWidth * 0.9);
    let barWidth = Math.floor(contWidth/array.length);
    barWidth = Math.min(barWidth, 20);
    // Style the bar
    bar.style.width = `${barWidth}px`;
    bar.style.height = `${(value / 100) * 95}%`;
    bar.style.backgroundColor =
      highlight.includes(idx) == true ? "#ff0000" : "#008000";
    bar.style.position = "relative";
    // Create label element inside bar
    const label = document.createElement("span");
    label.textContent = value;
    label.style.color = "black";
    label.style.textAlign = "center";
    label.style.width = "100%";
    label.style.position = "absolute";
    label.style.bottom = "100%";

    
    barWidth = Math.min(barWidth, 13);
    // Dynamically scale font size based on bar width
    label.style.fontSize = `${barWidth}px`; // Viewport width scaling

    bar.appendChild(label);
    container.appendChild(bar);
  });
}
