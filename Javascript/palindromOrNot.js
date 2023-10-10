function palindromNumCheck(number){
    let oiginalNumber = number
   let reversedNumber = 0
    while(number > 0){
        let lastDigit = number % 10 
        reversedNumber = reversedNumber * 10 + lastDigit
        number = Math.floor(number / 10)

    }
    if(reversedNumber === oiginalNumber){
        return `number is palindrome`
    }
    else{
        return `number is not a palindrome`
    }
}

console.log(palindromNumCheck(123213))