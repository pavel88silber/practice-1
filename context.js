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
    info:() => {
        console.log('this:', this)
        console.log('hasOwnProperty? lastName:  ', person.hasOwnProperty('lastName')) // true
        console.log('hasOwnProperty? info:  ', person.hasOwnProperty('info')) // true
        console.info('Human name: ' + person.firstName)
    }
}

console.log(person.info());
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
    // метод keys который будет выводить в консоль ключи объекта теперь с this
    keys: () => {
        console.log(this)
    }
}
// С помощью this можно выводить данные любого объекта 
console.log(logger2.keys(person)) 