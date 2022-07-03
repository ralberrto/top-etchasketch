console.log("Hello world!")
const cont = document.querySelector("#grid-container");

const gridSize = 100;
const elements = Array(0).fill(undefined);

// Creates the elements conforming the grid
for (let row = 0; row < gridSize; row++) {
  let rowElement = document.createElement("div")
  rowElement.classList.add("row")
  cont.appendChild(rowElement)
  for (let col = 0; col < gridSize; col++) {
    let element = document.createElement("div");
    element.classList.add("element");
    elements.push(element);
    rowElement.appendChild(element);
  }
}

elements.forEach(element => element.addEventListener("mouseover",
    () => element.classList.add("hovered-on")))