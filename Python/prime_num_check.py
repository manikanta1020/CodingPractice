def isPrime(n):
    # is_prime = True
    if n<=2:
        return False
    for i in range(2,int(n**0.5)+1):
        if n%i == 0:
            return False
    
    return True
        
    # if is_prime:
    #     print(True)
    # else:
    #     print(False)
        
# print(isPrime(int(input())))
##### print n primes####
# prime_lost = []
# for j in range(1,20):
#     if isPrime(j):
#         prime_lost.append(j)
# print(prime_lost)


### nearest prime

def nearest_prime(num):
    if isPrime(num):
        print("num is alredy prime")
    else:
        min_val = num-1
        max_val = num + 1
        
        while True:
            if isPrime(min_val):
                dif_min  = num - min_val
                print(abs(dif_min))
                print(min_val)
                break
            if isPrime(max_val):
                dif_max = num - max_val
                print(abs(dif_max))
                print(max_val)
                break
            min_val += -1
            max_val += 1
            
            
num = 27
nearest_prime(num)
                
