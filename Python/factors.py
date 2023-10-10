def factors(n):
    fact = []
    for i in range(1,n+1):
        if n%i == 0:
            fact.append(i)
    return fact

def prime_fact(n):
    if n <=2:
        return False
    else:
        for i in range(2,n):
            if n%i == 0:
                return False
    return True

n = 27
for i in factors(n):
    if prime_fact(i):
        print(i)
        
