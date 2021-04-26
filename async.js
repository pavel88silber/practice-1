// Event Loop

// const timeout = setTimeout(() => {
//     // clearTimeout(timeout)
//     console.log('After timeout 1.5 sec');
// }, 1500)

// clearTimeout(timeout)


// let num =0
// const interval = setInterval(() => {
//     num +=1
//     console.log('After interval 1.5 sec ' + num);
// }, 1500)

// clearInterval(interval)
///////////////////////////////////////////////////////////////////////////////////


// console.log('');
// console.log('---------------------- OLD WAY -----------------------------');

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, wait)
//     })
//     return promise
// }

// delay(800)
//     .then(() => {console.log('Promise works!')})
//     .catch(err => console.log('Error: ', err))
//     .finally(() => console.log('Finally'))

///////////////////////////////////////////////////////////////////////////////////

console.log('');
console.log('');
console.log('');


const delay2 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так..')
        }, wait)
    })
    return promise
}

// function return new Promise
const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

getData().then((data => {console.log('getData().then(    ' + data);}))

// setTimeout(() => {
//     console.log('');
//     console.log('');
//     console.log('---------------------- NEW WAY -----------------------------');
//     console.log('');
//     // getData().then(data => console.log(data))
// }, 2500)

///////////////////////////////////////////////////////////////////////////////////

delay2(2000)
    .then(() => {console.log('After 2 seconds, Promise works!')})
    .catch(err => {console.error('Error: ', err)})
    .finally(() => {console.log('Finally!');})

///////////////////////////////////////////////////////////////////////////////////

async function asyncExample() {
    try {
        await delay2(3000)
        const data = await getData()
        console.log('Data: ', data);
    } catch (e){
        console.log(e);
    } finally {
        console.log('Finally');
    }
    
}

asyncExample()


