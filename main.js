console.log("Etch-a-Sketch is running.");

const root = document.documentElement;

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

editGrid = () => {
  newSize = prompt("Enter an integer from 2-100 :");
  if (Number.isInteger(parseInt(newSize)) && newSize >= 2 && newSize <= 100) {
    root.style.setProperty("--grid-size", newSize);
    generateGrid();
  } else {
    alert("Invalid input, please try again.");
  }
};

const editGridButton = document.querySelector(".edit-grid");
editGridButton.addEventListener("click", editGrid);

const clearGridButton = document.querySelector(".clear-grid");
clearGridButton.addEventListener("click", generateGrid);

generateGrid();
