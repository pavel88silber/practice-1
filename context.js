const style1 = [
    'color: powderBlue',
    'text-shadow: 2px 2px purple', 
    'background: plum', 
    'font-size: 2em',
    'border: 1px solid purple',
    'padding: 10px',
    'font-family: fantasy'
].join(';');

const style2 = [
    'color: white',
    'text-shadow: 2px 2px purple', 
    'background: red', 
    'font-size: 1em',
    'border: 1px solid purple',
    'padding: 3px'
    // 'font-family: fantasy'
].join(';');

const style3 = [
    'color: blue',
    'text-shadow: 0.5px 0.5px purple', 
    'background: plum', 
    'font-size: 2em',
    'border: 1px solid purple',
    'padding: 10px',
    'font-family: fantasy',
    'border-radius: 2rem'
].join(';');

const styleBlack = [
    'color: white',
    'text-shadow: 2px 2px purple', 
    'background: black', 
    'font-size: 1em',
    'border: 1px solid purple',
    'padding: 3px'
    // 'font-family: fantasy'
].join(';');

const style5 = [
    'color: white',
    'text-shadow: 2px 2px purple', 
    'background: green', 
    'font-size: 1em',
    'border: 1px solid purple',
    'padding: 3px'
    // 'font-family: fantasy'
].join(';');



// const person = new Object()
console.log('----------------------------------------------------------------')
console.log('------------------------- Universal method  with (contex) ---------------------------------------')
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    language: ['ru', 'he', 'en'],
    greet:() => {
        console.log('Hello  from method!')
    },
    info:(obj) => {
        console.log('this:', obj)
        console.log('hasOwnProperty? lastName:  ', person.hasOwnProperty('lastName')) // true
        console.log('hasOwnProperty? info:  ', person.hasOwnProperty('info')) // true
        console.info('Human name: ' + person.firstName)
    }
}

const human = {
    firstName: 'John'
}


console.log(person.info());
console.log(person.info(human.firstName));  // John

console.log('');
console.log('');
console.log('');

console.log('--------------------------- Looger -------------------------------------')


// Объект logger с некоторыми методами
// const logger = {
//     // метод keys который будет выводить в консоль ключи объекта
//     keys: (obj) => {
//         console.log(obj)
//     }
// }

// Объект logger2 с некоторыми методами
const logger2 = {
    num: 22,
    // метод keys который будет выводить в консоль ключи объекта теперь с this
    keys() {
        console.log('Object Keys  ==>  ' + Object.keys(this))
    }
}
console.log(logger2.keys(person));

// С помощью this можно выводить данные любого объекта 
// console.log(person)
console.log('');
console.log('');
console.log('');
console.log(`%c Bind() `, style3)
console.log(`%c привязывает определенный контекст который мы сами выберем`, style2)
console.log(`%c метод Bind() return new function`, styleBlack)
const bound = logger2.keys.bind(person)
bound()
console.log(`%c Call тоже самое что и Bind() но только сама себя вызывает... `, style5)

logger2.keys.call(person)

console.log('');
console.log('');
console.log('');
console.log(`%c Практика от Владлена`, styleBlack)


// Object.keys(person).forEach((key) => {
//     console.log(key, person[key])
// })

const logger3 = {
    keysAndValues() {
        Object.keys(this).forEach((key) => {              //  Object.keys(person) ARRAY
            console.log(key + ' * * * * * * * * * ' + this[key])
            // console.log(`"${key}" : ${this[key]}`)

        })
    }
}

logger3.keysAndValues.call(logger3)
// logger3.keysAndValues.call(person)

const textContext = document.querySelector('#textRow3')
textContext.innerHTML = 'Записал в тетрадь .bind() .call() apply()'