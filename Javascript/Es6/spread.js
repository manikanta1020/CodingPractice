// spread operator is used to unpack interables into individual elements
// it is used to copy arryor object into other arry or object
// it is used to concatenate arry or objects
//it is used in fuctions to expand arry into the list of individual arguments 

let arr1 = [-1,2,3]
let arr2 = [4,5]

console.log(arr1.toString(","))


// copy arr1 and arr2 values in newArr 
let newArr = [...arr1,...arr2]
//other way is using concat()
let newCopy = arr1.concat(arr2)
// console.log(newCopy)
// console.log(newArr)


let copyArr = [...arr1]
copyArr.push(10)
// console.log(arr1)
// console.log(copyArr)
let arr3 = [...newArr]

// console.log(arr3)

// console.log(Math.min(...arr3))