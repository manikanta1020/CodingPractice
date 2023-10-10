function factorial(n){
    let p = 1
    for (let i =1; i<=n;i++){
        p = i * p 
    }
    return p 
}
console.log(factorial(6))