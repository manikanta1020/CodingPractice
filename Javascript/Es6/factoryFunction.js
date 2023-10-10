function carObj(color,brand){
    return{
        color,
        brand,
        start(){
            console.log("stated")
        }
    }
}

let myCar= carObj("red","audi")
console.log(myCar.start())