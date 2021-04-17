const heading = document.getElementById('header')
const par = document.getElementById('par')
// const shape2 = document.querySelector('.shape2')

addStylesTo(par, 'red', 'white', 'setTimeout()', '2rem', 200)
addStylesTo(heading, 'black', 'red','Practice 1', '2rem', 600)
addStylesTo(par1, 'pink', 'blue','document это глобальный объект в браузере, доступный в Javascript', '2rem', 800)
addStylesTo(par2, 'green', 'white','window это глобальный объект в браузере, доступный в Javascript', '2rem', 1200)
addStylesTo(par3, 'yellow', 'red','Эсли объект глобальный его можно опустить (alert() confirm() promt() browser API', '2rem', 1500)


function addStylesTo (node, color, textColor, text, padd, delay) {
    setTimeout((delay)=> {
        node.textContent = text
        node.style.background = color
        node.style.color = textColor
        node.style.padding = padd
    }, delay)
}


