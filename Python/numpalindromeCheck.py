def palindromCheckNum(number):
    reversedNumber = 0
    
    originalNumber = number
    
    while number >0:
        lastDigit = number % 10
        reversedNumber = reversedNumber * 10 + lastDigit
        number = number // 10
    
    if reversedNumber == originalNumber:
        return f"number is palindrome"
    else: return f"number is not a palindrome"
    
print(palindromCheckNum(1232111))
        