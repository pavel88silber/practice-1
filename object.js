// const person = new Object()
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    'complex key':'complex value',
    ['key_' + (1 + 3)]:'value 2',
    language: ['ru', 'he', 'en'],
    greet:() => {
        console.log('Hello  from method!')
        return 'person.greet() --> in console'
    }
}

// console.log(person.firstName.blink())
document.getElementById('textRow').innerHTML = person.year
document.getElementById('textRow2').innerHTML = "['key_' + (1 + 3)]:' value 2',  ==>  " +  "  person['key_4']  ==>  "  + person['key_4']
document.getElementById('textRow').innerHTML = 'We can call object methods  ==>' + person.greet() 

