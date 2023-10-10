function primeNumcheck(number){
    for (let i=2;i<number;i++){
        let count = 0
        if (number % i === 0){
            count = count + 1
        }
    if (count>0){
        return `${number} is not a prime`
    }
    else{
        return `${number} is a prime`
    }
    }
}

console.log(primeNumcheck(53))