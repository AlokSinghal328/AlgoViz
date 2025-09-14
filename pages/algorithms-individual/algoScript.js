import { initControls } from "../../src-Algo/ui/controlPanel.js";
import { runAlgorithm } from "../../src-Algo/core/control.js";
import { AppState } from "../../src-Algo/core/state.js";

const params = new URLSearchParams(window.location.search);
const algoName = params.get("algo"); // e.g., bubbleSort
const pageName = document.querySelector("#pageName");

if (algoName) {
  // Convert camelCase to "Title Case"
  const formattedName = algoName
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first character

  pageName.textContent = formattedName.trim(); // Update the page title
}

const script = document.createElement("script");
script.type = "module";
script.src = `/src-Algo/${algoName}.js`;
document.body.appendChild(script);

script.onload = () => {
  import(`/src-Algo/${algoName}.js`).then((mod) => {
    const selectedAlgorithm = mod[algoName];
    // ✅ Instead of calling main.js, just init here
    initControls(
      () => runAlgorithm(selectedAlgorithm),
      () => {
        AppState.isStopped = true;
      }
    );
  });
};
