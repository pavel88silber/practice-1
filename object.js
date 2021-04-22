// const person = new Object()
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    height: undefined,
    'complex key':'complex value',
    ['key_' + (1 + 3)]:'value 2',
    language: ['ru', 'he', 'en'],
    greet:() => {
        console.log('Hello  from method!')
        return 'person.greet() --> in console'
    }
}

// console.log(person.firstName.blink())
// document.getElementById('textRow').innerHTML = person.year
document.getElementById('textRow2').innerHTML = "['key_' + (1 + 3)]:' value 2',  ==>  " +  "  person['key_4']  ==>  "  + person['key_4']
document.getElementById('textRow').innerHTML = 'We can call object methods  ==>' + person.greet() 
document.getElementById('textRow3').innerHTML =  '0'

// redefine, adding, update
person.year++
console.log(person.year);

person.language.push('he')
console.log(person.language);

// delete with key
delete person['key_4']
console.log(person);

console.log('// =======================   DESTRUCTION   ============================ COURSE+ [Vladilen]')
// const firstName = person.firstName
// const lastName = person.lastName

//Better way
const {firstName, lastName:family, year, height=188} = person       // { lastName: family} change key name , height=188 value by default 

console.log(firstName, family, height, year)

console.log('----------------------------------------------------------------------------------------------')
console.log('//========================  Object Interacion ================================================')
// Loop for in ==> danger because insert proto_   (without proto)!!!

for (let key in person) {
    // console.log('value ', person[key])
    if (person.hasOwnProperty(key)) {
        console.log('value ', person[key])
    } 
}

console.log('MAKE CHECK WITH hasOwnProperty');

console.log('===============================================================================================================');
console.log('================================================  Global object Object  ===============================================================');
const keys = Object.keys(person)
console.log(keys);