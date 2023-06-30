function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.start = function (){
        console.log("Ta rodando.");
    }}

const myCar = new Car('Toyota', 'SW4', 2022)
console.log(myCar);