// first class function:
// 1.take function as a argumnet
// 2.return function as a argument
// 3.store function as a variable(Function expression)

//1. taking function as a argumnet
function getGreet() {
    return (new Date().getHours() < 12) ? "Good morning" : "Good morning";
}
function Print(getMessage, name) {
    console.log(`${getMessage()} ${name}`)
}
Print(getGreet, "vivek");

//2. returning a function
function getMess(name) {
    return function () {
        const data = (new Date().getHours() < 12) ? "Good Morning" : "Good Evening";
        return `${data} ${name}`;
    }
}
console.log(getMess("vivehk")());

//3. Storing a function as a variable
let func = function (a, b) {
    return a * b;
}
console.log(func(3, 5));

// even we can store objet instance in function
func.xyz = "vivek";
console.log(func.xyz);


// Why we need Higher order function using Real world example!

// this is basic approach
// constructor function
function Employee(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
}

// data fetch from api then store in array
let employees = [
    new Employee("Vivek1", 21, "coding1"),
    new Employee("Vivek2", 22, "coding2"),
    new Employee("Vivek3", 23, "coding3"),
    new Employee("Vivek4", 24, "coding4"),
    new Employee("Vivek4", 24, "coding4"),
    new Employee("Vivek5", 25, "coding5"),

];

// for employee age
function FilterAge(emps, age) {
    let result = [];
    for (let i = 0; i < emps.length; i++) {
        if (emps[i].age == age) {
            result.push(emps[i]);
        }
    }
    return result;
}


// for employee department
function FilterDepartment(emps, depart) {
    let result = [];
    for (let i = 0; i < emps.length; i++) {
        if (emps[i].department == depart) {
            result.push(emps[i]);
        }
    }
    return result;
}

console.log(FilterAge(employees,24));
console.log(FilterDepartment(employees,"coding5"));

// now High order function come in picture in above code having code duplication
console.log("using Higher Order Function");
function filter(emps,fn){
    let result=[];
    for(let i=0;i<emps.length;i++){
        if(fn(emps[i])){
            result.push(emps[i]);
        }
    }
    return result; 
}


console.log(filter(employees,function(emp){
    return emp.age==24;
}));
console.log(filter(employees,function(emp){
    return emp.department=="coding1";
}));

// we can create also function then we pass as a argument
function testt(emp){
    return emp.age==29;
}
console.log(filter(employees,testt));




