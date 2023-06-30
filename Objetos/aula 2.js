const person = {
    name: 'John',
    age: 30,
    occuppation: 'Developer'
}

console.log(person);

const car = new Object();
car.make = 'Toyota';
car.model = 'Sw4';
car.year = 2022;

console.log(car);

function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book = new Book ('The Great Gasby', 'F.scoot', 1925)

Book();

console.log(book);