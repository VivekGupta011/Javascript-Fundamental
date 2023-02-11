
// taking function as a argumnet
function getGreet(){
    return (new Date().getHours()<12) ? "Good morning":"Good morning";
}
function Print(getMessage,name){
    console.log(`${getMessage()} ${name}`)
}
Print(getGreet,"vivek");

// taking function as a argumnet
function getMess(name){
    return function(){
        const data=(new Date().getHours()<12)?"Good Morning":"Good Evening";
        return `${data} ${name}`;
    }
}
console.log(getMess("vivehk")());