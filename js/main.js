const gameContainer = document.querySelector('#game-container')
const widthGameContainer = gameContainer.offsetWidth
let lengthOfSquare = 33


const btnChangeSize = document.querySelector('#changeSize')
const select = document.querySelector('#select')


btnChangeSize.addEventListener('click', changeFieldSize)

function random_rgba() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}

const changeColorRandom = function() {
    this.style.backgroundColor = `${random_rgba()}`
    console.log(this.style.backgroundColor = `${random_rgba()}`);
}

const changeColorDarker = function() {
    let opacity = parseFloat(this.style.backgroundColor.slice(-4, -1))
    if (!opacity) {
        this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        opacity = parseFloat(this.style.backgroundColor.slice(-4, -1))
    }
    if (opacity !== 0.9) {
        opacity += +0.1
        this.style.backgroundColor = `rgba(0,0,0,${opacity})`
    }

}

let colorMode = changeColorRandom


select.addEventListener('change', () => {
    if (select.selectedOptions[0].innerText === 'mode Random') { colorMode = changeColorRandom }
    if (select.selectedOptions[0].innerText === 'mode Darker') { colorMode = changeColorDarker }
    console.log(select.selectedOptions[0].innerText);
    createField(colorMode)

})

function createColorContainer() {
    const widthPart = widthGameContainer / lengthOfSquare
    const block = document.createElement('div')
    block.classList.add('color-container')
    block.style.width = `${widthPart}px`
    block.style.height = `${widthPart}px`
        // block.style.backgroundColor
    return block
}


function changeFieldSize(e) {
    let newLength = window.prompt('How many squares per side? Max:100', '')
    console.log(isNaN(newLength));
    while (isNaN(newLength) || newLength === '' || newLength > 100 || newLength < 0) {
        newLength = window.prompt('Put Only Number! How many squares per side? Max:100')
    }
    lengthOfSquare = newLength
    createField(colorMode)
}


function createField(color) {
    gameContainer.innerHTML = '';
    for (let i = 0; i < lengthOfSquare; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        for (let y = 0; y < lengthOfSquare; y++) {
            const colorContainer = createColorContainer()
            row.append(colorContainer)
            colorContainer.addEventListener('mouseover', color)
        }
        gameContainer.append(row)

    }
}
createField(colorMode)

console.log(document);