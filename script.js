console.log("Hello world!")
const cont = document.querySelector("#grid-container");

const gridSize = 4;
for (let row = 0; row < gridSize; row++) {
  let rowElement = document.createElement("div")
  rowElement.classList.add("row")
  cont.appendChild(rowElement)
  for (let col = 0; col < gridSize; col++) {
    let colElement = document.createElement("div");
    colElement.classList.add("column");
    rowElement.appendChild(colElement);
  }
}