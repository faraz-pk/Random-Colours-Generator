for (let index = 0; index < 100; index++) {
    document.querySelector('body').innerHTML += `<div class="container"></div>`;
}

let containerEls = document.querySelectorAll('.container');

createColor();

function createColor(){
    containerEls.forEach((containerEl) => {
        let newColorCode = randomCode();
        containerEl.style.backgroundColor = newColorCode;
        containerEl.innerText = newColorCode;
    });
}

function randomCode() {
    let characters = "0123456789abcdef";
    let colorCode = "#";

    for (let index = 0; index < 6; index++) {
        let  randomChar = Math.floor(Math.random() * characters.length);
        colorCode += characters.substring(randomChar, randomChar + 1);
    }
    return colorCode;
} 

// function generateColors() {
//     colorContainerEls.forEach((colorContainerEl) => {
//       const newColorCode = randomColor();
//       colorContainerEl.style.backgroundColor = "#" + newColorCode;
//       colorContainerEl.innerText = "#" + newColorCode;
//     });
//   }