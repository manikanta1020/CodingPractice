function isPrime(n){
    if (n<=2){
        return false
    }else{
        for (let i=2;i<Math.sqrt(n)+1;i++){
            if ((n%i)===0){
                return false
            }
        }
        return true
    }
    
}
let n = 50
let list_primes = []
for(let j=2;j<n;j++){
    if (isPrime(j)){
        list_primes.push(j)
    }
}
// console.log(isPrime(15))
console.log(list_primes)