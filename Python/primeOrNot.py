def primeNumCheck(number):
    count = 0
    for i in range(2,number):
        if number % i ==0:
            count = count +1 
    if count > 0:
        return f"{number} is not a prime"
    else:
        return f"{number} is a prime"
    
print(primeNumCheck(22))