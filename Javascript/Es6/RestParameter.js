// rest parameter is used to pack the multiple values into array
function add(...args){
    let s = 0
    for (let i in args){
        s = s+args[i]
    }
    return s
    
}
console.log(add(1,2,3,4))
let [a,b,...rest ] = [1, 2, 3, 4, 5];

console.log(a);  // 1
console.log(b);  // 2
console.log(rest);  // [3, 4, 5]

function print(...args){
    console.log(args)
}
print(1,2,4)