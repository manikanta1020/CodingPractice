// // consise way of writing functions
// //these are annonymus fucntions
// function add(a,b){
//     // console.log(this)
//     return a+b
// }
// // console.log(add(2,4))
// // console.log(this)

// // let add = (a,b,c) => a+b+c
// let sum = (a,b) =>{
//     result = a+b 
//     console.log(this)
//     return result
// }
// // console.log(sum(2,3))

// // console.log(add(2,3,5))
// const createPerson = (name, age) => ({ name, age });

// const newPerson = createPerson("mani",29)
// // console.log(newPerson)

// let greet = name => `hi ${name}`
// console.log(greet("mani"))

let car = {
    color: "blue",
    brand: "Audi",
    start: function() {
      setTimeout(() => {
        console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() }
      }, 1000);
    }
  };
  
//   car.start();
// const myObj = {
//     name : "mani",
//     myMethod: () => {
//       console.log(this)
//     },
//   }

//   myObj.sayHi = function sayHi(){
//     console.log(this)
//   }
// myObj.myMethod()
// // myObj.sayHi()

const obj = {
    name: "Alice",
    greet: function () {
      setTimeout(() => {
        // Arrow function inherits `this` from the surrounding context (method `greet`)
        console.log(this);
      }, 1000);
    },
  };
  
  obj.greet();