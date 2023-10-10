function MyCar(color,brand){
    this.color = color,
    this.brand = brand,
    this.state = function(){
        console.log("stated")
    }
}

const myCar = new MyCar("blue","BMW")

console.log(prototype(myCar))