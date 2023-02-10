// Fro detail =>https://www.webmound.com/javascript-factory-function-explained/
// When Should You Use JavaScript Factory Function?
// 1.If you need multiple objects with similar types of properties and methods with little difference.
// 2.To reduce code duplication.
// 3.To organize your code.
// 4.


// function factory
function createRobot(name){
    return {
        name:name,
        talk:function(){
            console.log(`My name is ${name}`);
        }
    }
}

// create a robot with name chitti
// const robo1=createRobot('chittii');
// robo1.talk();
createRobot('chittii').talk();
createRobot('chittii updated 2.0').talk();
console.log(createRobot("vivek"));


// Another way of returning object in function
function Person(name,age){

    // creating object
    var person={};

    // adding key value pair
    person.name=name;
    person.age=age;

    //function to greet
    person.greet=function(){
        return `Hello I am ${person.name} age ${person.age} years old.`;
    }

    return person;
}
console.log(Person("vivek",21).greet());
console.log(Person("vivek",21).greet());



// Data privacy in function factory
const max = {
    name: 'Max',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
};

// Easyly changing data e.q name
max.name="Vivek";
console.log(max.greet());
// Hello, my name is Vivek



// Real word example Factory function using HTML DOM
const createElement=(type,content,color)=>{
    const element=document.createElement(type);
    element.innerHTML=content;
    document.body.appendChild(element);
    return{
        element,
        setText(content){
            element.innerHTML=content
        },setColor(color){
            element.style.color=color;
        }
    }
}
const h1=createElement('h1','Hey guys','red');
console.log(h1);