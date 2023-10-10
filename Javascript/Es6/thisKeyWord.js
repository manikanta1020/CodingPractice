"use strict";
// const obj = {
//     name: "Alice",
//     greet: function () {
//       setTimeout(function () {
//         console.log(this.name); // Refers to the global object (not obj)
//       }, 1000);
//     },
//   };
//   obj.greet(); // Outputs: undefined

const obj1 = {
    name:"mani",
    age:20,
    print:  function() {console.log(this.age)}
        
    
}
obj1.sayHi = function()  {
    console.log(this)
}
obj1.print()
obj1.sayHi()

