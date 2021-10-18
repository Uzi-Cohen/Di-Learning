const colorClasses = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "black",
  "brown"
];

//  Color

document
  .querySelector(".color-palette")
  .addEventListener("click", e => draw(e.target.classList.value));

const colorGrid = document.querySelector(".color-grid");
draw("red"); // default color

function draw(choosenColor) {
  // color on click
  colorGrid.addEventListener("click", e => {
    colorOneCell(e);
  });
  // color with drag and drop like aproach, with mousedown, mousemove and mouseup
  colorGrid.addEventListener("mousedown", e => {
    colorOneCell(e);
    colorGrid.ondragstart = function() {
      return false;
    };

    colorGrid.addEventListener("mousemove", mouseMovehandler);

    document.addEventListener("mouseup", () => {
      colorGrid.removeEventListener("mousemove", mouseMovehandler);
    });
  });

  const mouseMovehandler = e => colorOneCell(e);

  function colorOneCell(e) {
    e.target.classList.remove(...colorClasses);
    e.target.classList.add(choosenColor);
    console.log(e.target);
  }
}

//  Clear All Grid
function clearAllGrid() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove(...colorClasses);
  }
}
document
  .querySelector(".reset-btn")
  .addEventListener("click", () => clearAllGrid());

//  Clear One Cell
function clearOneCell() {
  colorGrid.addEventListener("click", e => {
    clearCell(e);
  });
  colorGrid.ondragstart = function() {
    return false;
  };
  colorGrid.addEventListener("click", e => {
    clearCell(e);
  });
  colorGrid.addEventListener("mousedown", e => {
    clearCell(e);
    colorGrid.addEventListener("mousemove", mouseMovehandler);
    document.addEventListener("mouseup", () => {
      console.log("mouseup");
      colorGrid.removeEventListener("mousemove", mouseMovehandler);
    });
  });
  const mouseMovehandler = e => clearCell(e);
  const clearCell = e => e.target.classList.remove(...colorClasses);
}
document
  .querySelector(".clear-btn")
  .addEventListener("click", () => clearOneCell());

//  Resize Color grid
handleRangeChange(30);
document
  .querySelector('input[type="range"]')
  .addEventListener("change", e => handleRangeChange(Number(e.target.value)));

function handleRangeChange(numOfCells) {
  document.querySelector(".num-of-cells-label").innerHTML =
    numOfCells + " x " + numOfCells;
  const gridWidth = 400; //  possibly change in future
  const cellWidth = Math.floor(gridWidth / numOfCells);
  let renderCells = "";

  for (let i = 0; i < numOfCells * numOfCells; i++) {
    renderCells += `<div class="cell" style="width: ${cellWidth}px; height: ${cellWidth}px;"></div>`;
  }
  document.querySelector(".color-grid").innerHTML = renderCells;

  document.querySelector(
    ".color-grid"
  ).style.gridTemplateRows = `repeat(${numOfCells}, 1fr)`;
  document.querySelector(
    ".color-grid"
  ).style.gridTemplateColumns = `repeat(${numOfCells}, 1fr)`;
}