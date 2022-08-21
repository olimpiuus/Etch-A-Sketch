const gameContainer = document.querySelector('#game-container')
const widthGameContainer = gameContainer.offsetWidth
let lengthOfSquare = 100

const btnChangeSize = document.querySelector('#changeSize')

btnChangeSize.addEventListener('click', changeFieldSize)

function createColorContainer() {
    const widthPart = widthGameContainer / lengthOfSquare
    const block = document.createElement('div')
    block.classList.add('color-container')
    block.style.width = `${widthPart}px`
    block.style.height = `${widthPart}px`
        // block.style.backgroundColor
    return block
}

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

function changeFieldSize(e) {
    let newLength = window.prompt('How many squares per side? Max:100', '')
    console.log(isNaN(newLength));
    while (isNaN(newLength) || newLength === '' || newLength > 100 || newLength < 0) {
        newLength = window.prompt('Put Only Number! How many squares per side? Max:100')
    }
    lengthOfSquare = newLength
    createField()
}

function changeColorBlock(item) {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `${random_rgba()}`
        console.log(item.style.backgroundColor = `${random_rgba()}`);
    })
}


var color = random_rgba();

function createField() {
    gameContainer.innerHTML = '';

    for (let i = 0; i < lengthOfSquare; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let y = 0; y < lengthOfSquare; y++) {
            const colorContainer = createColorContainer()
            changeColorBlock(colorContainer)
            row.append(colorContainer)
        }
        gameContainer.append(row)

    }
}
createField()