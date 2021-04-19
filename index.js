const heading = document.getElementById('header')
const par = document.getElementById('par')
// const shape2 = document.querySelector('.shape2')

addStylesTo(par, 'red', 'white', 'setTimeout()', '2rem', 200)
addStylesTo(heading, 'black', 'red','Practice 1', '2rem', 600)
addStylesTo(par1, 'pink', 'blue','document это глобальный объект в браузере, доступный в Javascript', '2rem', 800)
addStylesTo(par2, 'green', 'white','window это глобальный объект в браузере, доступный в Javascript', '2rem', 1200)
addStylesTo(par3, 'yellow', 'red','Эсли объект глобальный его можно опустить (alert() confirm() promt() browser API', '2rem', 1500)

findById_addText('h2Title', 'Find and Add text')

function addStylesTo (node, color, textColor, text, padding, delay, fontSize = '1rem') {
    setTimeout(()=> {
        node.textContent = text
        node.style.background = color
        node.style.color = textColor
        node.style.padding = padding
        node.style.borderRadius = '1em'
        node.style.margin = '1em'
        node.style.boxShadow = "10px 20px 30px lightblue"
        node.style.textShadow = "0.5px 1px lightgreen"

        // if falsy: '', undefined, null, false, 0
        if(fontSize) {
            node.style.fontSize = fontSize
        }

    }, delay)
}

function findById_addText (newId, text) {
    let id = document.getElementById(newId)
    id.textContent = text
    id.style.boxShadow = "3px 5px 8px lightblue"
    id.style.textShadow = "0.5px 1px lightgreen"
}



// Adding new element by clicking the button in shape2
const newElemBtn = document.querySelector('#newElemBtn')
let elemCount = 0
newElemBtn.onclick = () => {
    const shape2 = document.getElementById('insideBox')
    let newItem = document.createElement('p')
    newItem.setAttribute("id", 'elemId' + (++elemCount))
    newItem.setAttribute("class", 'newElem')
    newItem.setAttribute("onClick", 'reply_click(this.id)')
    shape2.appendChild(newItem)
}

// Deleting new element by clicking the button in shape2
const deleteElemBtn = document.querySelector('#deleteElemBtn')
deleteElemBtn.onclick = () => {
    const shape2 = document.getElementById('insideBox')
    shape2.removeChild(shape2.lastChild)
}

// Counter (1 SECOND)
const count = document.querySelector('#count')
let countSum = 0
setInterval(()=> {
    countSum += 1
    count.textContent = countSum

}, 1000)


const shapePlus = document.getElementById('shapePlus')  // HTML ELEMENT
console.log('shapePlus => ' + shapePlus)
console.log('shapePlus.lastChild => ' + shapePlus.lastChild)


// ON CLICK CHANGE COLOR OF ELEMENT
let clicked = ''
function reply_click (clickedId) {
    clicked = document.getElementById(clickedId)
    if(clicked.style.background ==  'green') {
        clicked.style.background = 'yellow'
    } else {
        clicked.style.background = 'green'
    }

}




