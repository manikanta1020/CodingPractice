// let n = 4 

// for (let i=1; i<=4;i++){
//     console.log("* ".repeat(i))
// }

// nested loop
let nn= 5 
for (let i=1;i<=nn;i++){
    row = ""
    for (let j=1;j<=i;j++){
        row += "* "
    }
    console.log(row)
}