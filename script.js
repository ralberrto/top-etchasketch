console.log("Hello world!")

const gridContainer = document.querySelector("#grid-container");

const resolutionButton = document.querySelector("nav button");
resolutionButton.addEventListener("click", () => drawGrid(changeGridSize()));

drawGrid(64)

function changeGridSize() {
  let userGridSize = prompt("Type resolution:");
  if (userGridSize > 100) {
    confirm("The size must be less or equal to 100!");
    userGridSize = changeGridSize();
  }
  return userGridSize;
}

function drawGrid(gridSize) {
  clearGrid()
  const elements = Array(0).fill(undefined);
  
  // Creates the elements conforming the grid
  for (let row = 0; row < gridSize; row++) {
    let rowElement = document.createElement("div")
    rowElement.classList.add("row")
    gridContainer.appendChild(rowElement)
    for (let col = 0; col < gridSize; col++) {
      let element = document.createElement("div");
      element.classList.add("element");
      elements.push(element);
      rowElement.appendChild(element);
    }
  }
  elements.forEach(element => element.addEventListener("mouseover",
    () => element.classList.add("hovered-on")));
}

function clearGrid() {
  gridContainer.textContent = "";
}

