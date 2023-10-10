let n1 = 0
let n2 = 1
let count = 0 

while (count < 5){
    console.log(n1)
    let nth = n1 + n2
    n1 = n2 
    n2 = nth 
    count = count + 1 
}
