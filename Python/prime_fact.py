def get_prime_factors(n):
    factors = set()
    divisor = 2
    while n > 2:
       if(n % divisor == 0):
           factors.add(divisor)
           n = n / divisor
       else:
           divisor = divisor + 1
    return factors
 
num = int (input('Enter your number: '))
factors = get_prime_factors(num)
print(factors)