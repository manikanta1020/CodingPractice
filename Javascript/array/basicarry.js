const my_array = [1,2,3,4,5]

// function sqf(a){
//     return a*a
// }
// const sqList = my_array.map(sqf)
// console.log(sqList);
const sqlist = []
function sqr(a){
    const s = a*a;
    sqlist.push(s)
}

my_array.forEach(sqr)
console.log(sqlist);