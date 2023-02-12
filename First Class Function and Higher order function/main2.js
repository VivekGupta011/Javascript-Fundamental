// HOF=>A Higher-Order Function is a regular function that takes one or more functions as arguments and/or returns a function as a value from it.
let arr = [1, 2, 3, 4, 5];
function func1(array) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + 1);
    }
}
func1(arr);

// using HOF forEach()
arr.forEach((i) => {
    console.log(i + 2);
})

// find odd number
const numbers = [1, 2, 3, 4, 5];
function OddNum(numbers, arr = []) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            arr.push(numbers[i]);
        }
    }
    return arr;
}
console.log(OddNum(numbers));

// using HOF forEach()
let res = numbers.filter((i) => i % 2 !== 0);
console.log(res);



const number = [1, 2, 3, 4, 5];

function addOneMore(array, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] + 1);
    }
    return newArr;
}

const newArray = addOneMore(number);
console.log(newArray);

// using HOF forEach()
const resultMap = newArray.map((i) => {
    return i + 1;
})
console.log(resultMap);


// what if we have to find total sum

const numberss = [1, 2, 3, 4, 5];

const totalValue = numberss.reduce((sum, number) => sum + number);
console.log(totalValue); 






