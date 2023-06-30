var i = 5;

for (let i = 0; i < 10; i++) {
    console.log(i);;
}

let nomes = [
    "Isaac",
    "Raiany"
]

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


for (let i = 0; i < 11; i++) {
    console.log("5 x " + i + " = " + 5 * i);
}


//O laço for...in itera pelas propriedades de um objeto. 
//Para cada propriedade, as instruções dentro do laço são executadas.

const capitais = {
    a: "Atenas",
    b: "Belgrado",
    c: "Cairo"
};

for (let chave in capitais) {
    console.log(chave + ": " + capitais[chave])
}

let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}

for (propriedade in carro) {
    console.log(propriedade);
}

const person =
{
    fname: "Isaac ",
    lname: "Maciel ",
    age: 22
};

let text = "";
for (let x in person) {
    text += person[x];
}
console.log(text);

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}
console.log(txt);

// for.of

const arr = [ "Fred", "Tom", "Bob" ];

for (let i of arr) {
  console.log(i);
}

const cars = ["BMW", "Volvo", "Mini"];

let texto = "";
for (let x of cars) {
    texto += x;
}
console.log(texto);

let language = "JavaScript";

let texto1 = "";
for (let x of language) {
    texto1 += x;
}

console.log(texto1);
