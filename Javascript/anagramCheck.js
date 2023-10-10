function anagramCheck(string){
    let revString = ""

    for (let i in string){
        revString = string[i] + revString
    }
    if (revString == string){
        return 'ok'
    }
    else {
        return 'not Ok'
    }
}

console.log(anagramCheck("abcba"))