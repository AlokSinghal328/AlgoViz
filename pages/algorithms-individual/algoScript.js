const params = new URLSearchParams(window.location.search);
const algoName = params.get("algo"); // e.g., bubble-sort
const pageName = document.querySelector("#pageName");

if (algoName) {
  // Convert camelCase to "Title Case"
  const formattedName = algoName
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()); // Capitalize the first character

  pageName.textContent = formattedName.trim(); // Update the page title
}

if (algoName) {
  const script = document.createElement("script");
  script.type = "module";
  script.src = `/src-Algo/${algoName}.js`;
  document.body.appendChild(script);
}
