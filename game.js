// Добавьте в colors фиолетовый, серый и зеленый цвет. 
// Измените размер доски на 180 // Обратите внимание на (SQUARES_NUMBER)
// Добавьте border зеленый 5px
// Добавьте в внутрь скобки addEventListener функции 'mouseover', 'mouseleave'
// Измените getElementById на querrySelector после не забудьте добавить что то в скобку. 
// Добавьте в последнюю функцию в константу index код Math.floor(Math.random()
// Поставьте любую фото из компьютера на фон. Путь к фото  нужно быть из данного проекта. 

 

const board = document.getElementById('board')
const colors = ['red', 'blue', 'yellow', 'pink', 
'brown', 'gold', 'white', 'orange', 'silver']
const SQUARES_NUMBER = 220;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('', () =>
    setColor(square))

    square.addEventListener('', () =>
    removeColor(square))

    board.append(square)
}
function setColor(element) {
    const color = getRandomColor ()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color} 0 0 
    10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

 function getRandomColor() {
    const index = 
    * colors.length)
    return colors[index]
}