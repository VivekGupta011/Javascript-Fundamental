// In JavaScript, a constructor function is used to create objects. For example,

// when we have create object we can use manual method creation cons obj1={},obj2={};



// this is normal function for creation of constructor function
// object literal obj={}
// [a]
function createObject(Firstname,lastname){
    const obj={
        Firstname:Firstname,
        lastname:lastname,
        greet:function(){
            console.log(`hello ${this.Firstname} ${this.lastname}`)
        }
    }
    return obj;
}

console.log(createObject("vivek","gupta"));
console.log(createObject("vivek","gupta"));

// now we going to create object using constructor function
// [b]
function createObjectUsingConstructor(Firstname,lastname){
    // const obj={}
     this.Firstname=Firstname;
     this.lastname=lastname;
     this.fullname=function(){
         console.log(`hello ${this.Firstname} ${this.lastname}`)
     }
    //  return obj;
}

let obj1=new createObjectUsingConstructor("roy","arya");
console.log(obj1.fullname());
// Note:code a and b only in constructor function we to dont create object and return object this work they done by yourself 