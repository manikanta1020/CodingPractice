def armstrongNumber(number):
    digits = len(str(number))
    
    sum = 0 
    for i in range(0,digits):
        strnumber = str(number)
        
        sum = int(strnumber[i]) ** digits + sum
        # print(sum)
    if sum == number:
        return f"armstron number"
    else: return f"not a armstong numbr"

    

print(armstrongNumber(9474))
        