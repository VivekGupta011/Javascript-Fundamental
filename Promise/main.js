

let promiseCleanRoom = new Promise((resolve, reject) => {
    cleanRoom = true;
    if (cleanRoom) {
        resolve("Cleaned the room");
    } else {
        reject("Broke the promise");
    }
})

promiseCleanRoom.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
})


// Demonstrating promise 
function take_5_sec() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 5000);
    })
}

function take_3_sec(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("fail");
        }, 3000);
    })
}


function run() {
    take_5_sec().then((result) => {
        console.log(result);
        return take_3_sec();
    }).then((result) => {
        console.log(result);
    }).catch(() => {
        console.log("error");
    }).finally(() => {
        console.log("completed execution");
    })
    
}
run();



// fetching data
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));
console.log(requests);
// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));
 

    // https://javascript.info/promise-api for more