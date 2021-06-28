// Don't change the functions name and don't remove "use strict"
"use strict";

// Problem 1.
function foo() {
  const arr = []
  for (let counter = 0; counter < 10; counter++) {
    arr.push("Re:Coded")
  }
  return arr
}
console.log(foo());

// --------------------------------- //

// Problem 2.
class Person {
 constructor(name){
   this.name = name;
  }
}

let ferdinand = new Person("Ferdinand");
console.log(ferdinand.name);

// --------------------------------- //

// Problem 3.
const mapSomething = (arr) => {
  return arr.map(n => n + 2)
}

// Returns [3, 4, 5]
console.log(mapSomething([1, 2, 3]));

// // --------------------------------- //

// Problem 4.
const multiplyByTwo = (arr) => {
  arr.forEach((element, index) => arr[index]= element * 2)
    return arr
}

const result = multiplyByTwo([3, 4, 5]);
// These should console.log the right things.
 console.log(result);
 console.log(result.length);

// --------------------------------- //

// Problem 5.
const multiplyOddByTwo = (arr) => {
  return arr.reduce((acc,curr) => {
    if(curr % 2 === 0){
      acc.push(curr);
    }else{
      acc.push(curr * 2)
    }
    return acc;
  },[])
} 

console.log(multiplyOddByTwo([1,2,3]));