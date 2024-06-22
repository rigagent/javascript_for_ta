// Subtask #1

function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});



// Subtask #2

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === 'number')) {
            let product = arr.reduce((acc, val) => acc * val, 1);
            resolve(product);
        } else {
            reject("Error! Incorrect array!");
        }
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).catch(result => console.log(result));



// Subtask #3

const delay1 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    let promiseChain = Promise.resolve();
    
    for (let i = 0; i < 10; i++) {
        promiseChain = promiseChain.then(() => {
            return delay1(i, Math.floor(Math.random() * 3000));
        }).then(result => {
            console.log(result);
        });
    }
}

showNumbers();



// Subtask #4

const delay2 = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
    for (let i = 0; i < 10; i++) {
        const result = await delay2(i, Math.floor(Math.random() * 3000));
        console.log(result);
    }
}

showNumbers();
