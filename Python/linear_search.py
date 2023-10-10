def linear_search(list, n):
    i = 0
    
    while i<len(list):
        if list[i]==n:
            return True,i
        i = i+1
    return False,-1

list = [5,6,3,8,9]
n = 10

# if linear_search(list,n):
#     print("Found",i)
# else:
#     print("not found",i)
found,index = linear_search(list,n)
if found:
    print(n,index)
else:
    print(n,index)
            
   
    
