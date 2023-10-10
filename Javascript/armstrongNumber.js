console.log(Math.pow(5,2))

function armstrongNumber(number){
    let stringNumber = number.toString()
    let numOfDigits = stringNumber.length
    let sum = 0 

    for (let i=0;i<numOfDigits;i++){

        sum = parseInt(stringNumber[i]) ** numOfDigits + sum 
    }
    if (sum === number){
        return `armstrong number`
    }
    else{
        return `not armstron number`
    }
}

// console.log(armstrongNumber(15322))