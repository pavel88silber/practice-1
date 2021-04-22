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
        console.log('this:', this);
        console.info('Human name: ' + person.firstName);
    }
}

// person.info()

// console.log(person.firstName.blink())
//document.getElementById('textRow3').innerHTML = person.year

const logger = {
    keys() {
        console.log(keys);
    }
}