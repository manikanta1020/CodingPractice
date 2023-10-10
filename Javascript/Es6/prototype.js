class Person{
    constructor(fname,lname){
        this.fname = fname,
        this.lname = lname
    }
    displayFullname(){
        return this.fname + " " + this.lname
    }
}

const p1 = new Person("mani","v")
console.log(p1.displayFullname())
console.log(Person.prototype)
console.log(Object.getPrototypeOf(p1))
console.log(typeof(Person))