console.log('hello world'.toUpperCase())

// this is a comment

/*
This is a multi-line comment
*/

x = 1
y = 2
console.log(x,y)

// in JS, you need to declare variables
var age
var name = 'Renat'
console.log(age)
console.log(name)
age = 9000
console.log(age)

// JS hoisting (old way)
// console.log(list)
// var list = [1,2,3]

// instead of VAR use LET / CONST
let list = [1,2,3]

// CONST
const myName = [1,2,3]
myName.push(4)
console.log(myName)

// JS does not care about indentation
let name1 = 'Shoha'
let name2 = "Sarah"
let name3 = `Rachel`
console.log(typeof name1)
console.log(typeof name2)
console.log(typeof name3)

// in JS, there is no distinction between ints and floats
const num1 = 1
const num2 = 2.2
console.log(num1, typeof num1)
console.log(num2, typeof num2)

// lists are known as Arrays in JS
const names = ['Shoha',"Edward",`Renat`]
console.log(names)
console.log(typeof names)

// check if an object is an Array
console.log(Array.isArray(names))
console.log(Array.isArray(name1))

// dictionaries are know as JS objects
const obj = {
    'first name': "Shoha",
    age: 9001,
    last_name: "Tsuchida",
    'Content-Type': 'application/json',
    name3,
    name2: name2
}
console.log(obj)

obj['first name'] = 'Sarah 2.0'
console.log(obj)

// undeclared, undefined, null
// console.log(shoha) // this variable has never been declared

let shoha // this variable is undefined
console.log(shoha)

shoha = null // this is null
console.log(shoha)

console.log('=======================================')
console.log('MATH')
console.log('=======================================')

// Math operations
// addition
let sum = 5 + 6
console.log(sum)
sum += 10
console.log(sum)
sum ++
console.log(sum)

// subtraction
let diff = 10-4
console.log(diff)
diff -= 2
console.log(diff)
diff --
console.log(diff)

// multiplication
let prod = 5*5
console.log(prod)
prod *= 5
console.log(prod)

// division
let quo = 100/4
console.log(quo)
quo /= 5
console.log(quo)

// exponential
let square = 5**2
console.log(square)
square **= 2
console.log(square)

// more math stuffs
const floor = Math.floor(24.7)
console.log(floor)
const ceil = Math.ceil(24.7)
console.log(ceil)

// interesting behavior
const n1 = 2
const n2 = '3'
const res = n1 + n2
console.log(res,typeof res)

// parse
console.log(parseInt('24.7'), typeof parseInt('24.7'))
console.log(parseFloat('24.7'), typeof parseFloat('24.7'))

console.log('=======================================')
console.log('FUNCTIONS')
console.log('=======================================')

// JS Functions
// method 1: very similar to python
function nameOfFunction(x,y){
    console.log(x,y)
    const z = 1+1;return z
}

console.log(nameOfFunction())
console.log(nameOfFunction(1,2,4,6,7,8,89));

// method 2: nameless function, BUT store it to variable
const timesTwo = function (num){
    return num*2
}
console.log(timesTwo(5))
console.log(typeof timesTwo, timesTwo)

// method 3: arrow function
// SYNTAX: () => {}
const arrowFunc = (num) => {
    return num * 3
}
console.log(typeof arrowFunc)
console.log(arrowFunc(3))

// variations on arrowfunction
// ONE parameter
const arrowFunc1 = num => {
    return num*3
}
console.log(arrowFunc1(4))

// One liner... meaning return line is only thing happening
// you can drop the cutly brace AND return statement

const arrowFunc2 = (num1,num2) => num1*num2
console.log(arrowFunc2(4,5))

const arrowFunc3 = num1 => num1*2
console.log(arrowFunc3(4));

// self invoking function
(()=>{
    console.log('this was a self-invoked function...meaning')
    console.log('I created a nameless function then ran it')
})();

(function (){console.log('DJ Khaled')})()

// closure
const outer = () => {
    let counter = 0; // private variable

    const inner = () => {
        console.log(counter)
        counter ++
    };
    
    return inner // setter function
};

const addToCounter = outer();
addToCounter();
addToCounter();
addToCounter();
addToCounter();

console.log('=======================================');
console.log('IF STATEMENTS');
console.log('=======================================');

// IF Statements
const ifTest = (num) => {
    if (num < 10){
        console.log('small number')
    }
    else if (num < 20){
        console.log('medium number')
    }
    else {
        console.log('big number')
    }
};

ifTest(6);
ifTest(11);
ifTest(21);

// Ternary operator
// SYNTAX: condition ? (what happens if true) : (if false)
const getFee = isMember => {
    return isMember ? '$2.00' : '$10.00'
};
console.log(getFee(true))
console.log(getFee(false))

console.log(names)
// for loops
for (let i = 0; i < names.length; i++){
    console.log(i, names[i])
};

// ES6 way to loop through an array (ES13)
// for-of when looping through an array
for (let name of names) {
    console.log(name)
}

// for-if when looping through an array
people = {
    'shoha':9000,
    'sarah':9001,
    'rachel':9002
}
for (let person in people) {
    console.log(person)
}

// while loops
// while (condition) {codeblock}
let i = 0
while (i<10){
    if (i == 4) {
        i++
        continue
    }
    else if (i==9){
        break
    }
    console.log(i)
    i++
}

// do while
// the codeblock will run AT LEAST 1 time
i = 100
do{
    console.log(i, 'do while')
    i++
}
while (i < 10)

let my_people = ['shoha','sarah','rachel']
my_people.push('sam')
console.log(my_people)
console.log(my_people[1])
console.log(my_people.length)
console.log(my_people.toString())
console.log(my_people.join('##'))
console.log(my_people.slice(1,3))

// splice
console.log(my_people)
console.log(my_people.splice(1,2,'renat')) // splice(location,how many to delete, what to put in)
console.log(my_people)