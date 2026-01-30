const container = document.querySelector(".container")
const navBar = document.querySelector(".nav-bar")
let numberOfSquares = 16;


// button to ask user how many squares he wants
const howManySquaresBtn = document.createElement('button')
howManySquaresBtn.textContent = "Click to choose the squares per side"
howManySquaresBtn.classList.add("howManySquaresBtn")
howManySquaresBtn.addEventListener("click", (event) => {
    numberOfSquares = Number(prompt("Input a number between 1 and 100"));
    if (
        numberOfSquares
        && typeof numberOfSquares === "number"
        && numberOfSquares > 0
        && numberOfSquares <= 100
    ) {
        drawSquares(numberOfSquares);
    } else {
        numberOfSquares = 16;
        drawSquares(numberOfSquares);
        alert('Invalid input, please make sure you type a number between 1 and 100')
    }
})
navBar.appendChild(howManySquaresBtn)

function drawSquares(numberOfSquares) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement('div')
        square.classList.add("square")
        square.style.width = `${960/numberOfSquares}px`;
        square.style.height = `${960/numberOfSquares}px`;
        square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
        container.appendChild(square)
    }
}


drawSquares(numberOfSquares);