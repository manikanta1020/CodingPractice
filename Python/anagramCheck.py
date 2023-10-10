def anagramCheck(string):
    revString = string[::-1]
    if string == revString:
        return 'anagram'
    else: return "not a anagram"
    
    
# print(anagramCheck("abcba"))

def loopCheck(string):
    rev = ""
    for i in range(len(string)):
        rev = string[i] + rev 
    if rev == string:
        return 'anagram'
    else: return 'not anagram'
    
print(loopCheck("abcba"))