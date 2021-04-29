console.log('');

const obj = {color: 'blue'}

// console.log(obj.color);

obj.color = 'red'

// console.log(obj.color);

const myF = () => console.log('My arrow function');
// myF()

// Context

function log() {
    console.log('function this => ' + this);
}

const arrowLogs = () => {
    console.log('arrow function this => ' + this);
}

log()
arrowLogs()

console.log('');