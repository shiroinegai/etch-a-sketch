console.log("Etch-a-Sketch is running.");

const root = document.documentElement;

const editGridButton = document.querySelector(".edit-grid");

const gridContainer = document.querySelector(".grid-container");

addCell = () => {
  let newCell = document.createElement("div");
  newCell.addEventListener("mouseover", (e) => colourCell(e.target));
  gridContainer.appendChild(newCell);
};

colourCell = (cell) => {
  cell.style.backgroundColor = "#ffffff";
};

generateGrid = () => {
  gridContainer.innerHTML = "";
  size = getComputedStyle(root).getPropertyValue("--grid-size");
  size *= size;
  for (let i = 0; i < size; i++) {
    addCell();
  }
};

const clearGridButton = document.querySelector(".clear-grid");
clearGridButton.addEventListener("click", generateGrid);

generateGrid();
