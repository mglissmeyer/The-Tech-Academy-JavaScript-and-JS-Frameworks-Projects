function useAnd() {
    let x = 5;
    let y = 1;


    const result = x & y;

    alert("AND is: " + result);     
}

function useOr() {
    let x = 5;
    let y = 1;

    const result = x | y;

    alert("OR is: " + result);
}

function useXor() {
    let x = 5;
    let y = 1;

    const result = x ^ y;

    alert("XOR is: " + result);
}

let text = "Visit The Tech Academy";
let n = text.search("The Tech Academy");
document.getElementById("practice").innerHTML = n;

function myFunction() {
    let tech = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace(/Become a computer programmer for a rewarding career!/i, "Learn more at The Tech Academy!");
}

function testFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let f = document.getElementById("pick").value;
    try { 
      if(f.trim() == "")  throw "try again";
      if(isNaN(f)) throw "do better";
      f = Number(f);
      if(f < 5)  throw "not that low";
      if(f > 10)   throw "not that high dingus";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("pick").value = "";
      }
    }
  
    "use strict";

myVariable = 10;

console.log("The value of myVariable is: " + myVariable);


const person = {
    firstName: "Mike",
    lastName: "Glissmeyer",
    id: 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("dude").innerHTML = person.fullName();


let hello = "";

hello = () => "Hello World!";

document.getElementById("hey").innerHTML = hello();

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Dodge", 2019);
const myCar2 = new Car("Toyota", 2018);

document.getElementById("wheels").innerHTML =
myCar1.name + " " + myCar2.name;

let g = 15 * 5;
debugger;
document.getElementById("bugs").innerHTML = g;

const numbers = [11, 8, 39, 12, 1];

document.getElementById("search").innerHTML = "First number over 15 has index " + numbers.findIndex(lookFunction);

function lookFunction(value, index, array) {
    return value > 15;
}
    
document.getElementById("numeros").innerHTML =
Number.isInteger(5) + "<br>" + Number.isInteger(5.3);

document.getElementById("buzz").innerHTML =
isFinite(15 / 0) + "<br>" + isFinite(15/3);

let c = 5;
let h = c ** 2;
document.getElementById("power").innerHTML = h;

function validateForm() {
    let k = document.forms["myForm"]["fname"].value;
    if (k == "") {
        alert("Name must be filled out");
        return false;
    }
}


    
